package com.trademate.project.Repository;

import com.trademate.project.Model.SaleModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<SaleModel, Long> {
}
