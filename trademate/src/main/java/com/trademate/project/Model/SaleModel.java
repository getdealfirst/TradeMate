package com.trademate.project.Model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="Sales Detail")
public class SaleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String productName;
    private String customerName;
    private int quantity;
    private LocalDate date;
    private int rate;
    private int receivedAmmount;
    private int totalAmmount;
    private int remaining;

    public SaleModel(long id, String productName, String customerName, int quantity, LocalDate date, int rate, int receivedAmmount, int totalAmmount, int remaining) {
        this.id = id;
        this.productName = productName;
        this.customerName = customerName;
        this.quantity = quantity;
        this.date = date;
        this.rate = rate;
        this.receivedAmmount = receivedAmmount;
        this.totalAmmount = totalAmmount;
        this.remaining = remaining;
    }

    public int getTotalAmmount() {
        return totalAmmount;
    }

    public void setTotalAmmount(int totalAmmount) {
        this.totalAmmount = totalAmmount;
    }

    public int getRemaining() {
        return remaining;
    }

    public void setRemaining(int remaining) {
        this.remaining = remaining;
    }

    public SaleModel() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public int getReceivedAmmount() {
        return receivedAmmount;
    }

    public void setReceivedAmmount(int receivedAmmount) {
        this.receivedAmmount = receivedAmmount;
    }
}
