package com.trademate.project.Service;

import com.trademate.project.Model.SaleModel;
import com.trademate.project.Repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SaleService {
    private SaleRepository saleRepository;
    @Autowired
    private StockItemService stockItemService;

    public SaleService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }


    public SaleModel addSale(SaleModel saleModel){
        saleModel.setTotalAmmount(saleModel.getQuantity()*saleModel.getRate());
        saleModel.setRemaining(saleModel.getTotalAmmount()-saleModel.getReceivedAmmount());
        int pr = saleModel.getTotalAmmount()-saleModel.getQuantity()*(stockItemService.getByName(saleModel.getItem()).getPurchasePrice());
        System.out.println("profit :-"+pr);
        saleModel.setProfit(pr);
        return saleRepository.save(saleModel);
    }
    public List<SaleModel> allSale(){
        return saleRepository.findAll();
    }
    public SaleModel getSaleById(long id){
        return saleRepository.findById(id).orElseThrow();
    }
    public String updateSales(SaleModel newSale,long id){
        saleRepository.findById(id).map(sale->{
            sale.setReceivedAmmount(sale.getReceivedAmmount()+newSale.getReceivedAmmount());
            sale.setRemaining(sale.getRemaining()-newSale.getReceivedAmmount());
            return saleRepository.save(sale);
        }).orElseThrow(()->new UsernameNotFoundException("User not Found "));
        return "Updated";
    }
    public String deleteSale(long id){
        saleRepository.deleteById(id);
        return  "Deleted";
    }
}
