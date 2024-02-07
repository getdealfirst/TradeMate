package com.trademate.project.Controller;

import com.trademate.project.Model.SaleModel;
import com.trademate.project.Service.SaleService;
import org.apache.catalina.LifecycleState;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/sales")
public class SaleController {
    private SaleService saleService;

    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }

    @PostMapping("/addSale")
    public ResponseEntity<SaleModel> addSale(@RequestBody SaleModel saleModel){
        return  new ResponseEntity<SaleModel>(saleService.addSale(saleModel), HttpStatus.CREATED);
    }
    @GetMapping("/allsaledetails")
    public List<SaleModel> getAllSale(){
        return saleService.allSale();
    }
    @GetMapping("/{id}")
    public SaleModel getSaleById(@PathVariable long id){
        return saleService.getSaleById(id);
    }
    @PutMapping("/editsale/{id}")
    public String editSale(@RequestBody SaleModel saleModel,@PathVariable long id){
        return saleService.updateSales(saleModel,id);
    }
}
