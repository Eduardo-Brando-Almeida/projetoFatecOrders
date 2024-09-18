"use client";

import CustomTable from "@/components/templates/ui/organisms/CustomTable";
import Layout from "@/components/templates/ui/organisms/Layout";
import { env } from "@/config/env";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [rows, setRows] = useState([
    {
      id: 0,
      description: "TESTE",
      brand: "TESTE",
      value: 3,
      weight: 2,
      flavor: "TESTE",
    },
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${env.apiBaseUrl}/product`);

      const products = response.data.produtos.map((product: any) => ({
        id: product.id,
        description: product.descricao,
        brand: product.marca,
        value: product.valor,
        weight: product.peso_gramas,
        flavor: product.sabor,
      }));

      setRows(products);
    };

    fetchProducts();
  }, []);

  /*const rows = [
    {
      id: 1,
      description: "TESTE",
      brand: "TESTE",
      value: 3,
      weight: 2,
      flavor: "TESTE",
    },
  ];
  */

  const headCells = [
    {
      id: "description",
      numeric: false,
      disablePadding: false,
      label: "Descrição",
    },
    {
      id: "brand",
      numeric: false,
      disablePadding: false,
      label: "Marca",
    },
    {
      id: "value",
      numeric: true,
      disablePadding: false,
      label: "Valor",
    },
    {
      id: "weight",
      numeric: true,
      disablePadding: false,
      label: "Peso",
    },
    {
      id: "flavor",
      numeric: false,
      disablePadding: false,
      label: "Sabor",
    },
  ];

  return (
    <Layout>
      <Box> Lista de Produtos </Box>
      <CustomTable rows={rows} headCells={headCells} />
    </Layout>
  );
};

export default Products;
