package com.trademate.project.Controller;

import com.trademate.project.Model.StockItemModel;
import com.trademate.project.Service.StockItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stock")
public class StockItemController {
    @Autowired
    private StockItemService service;

        @PostMapping("/add")
    public ResponseEntity<StockItemModel> addStock(@RequestBody StockItemModel item){
        return service.addStock(item);
    }
    @GetMapping("/all")
    public List<StockItemModel> getAll(){
        return service.getAll();
    }
}
