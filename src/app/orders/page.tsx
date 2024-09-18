"use client";

import CustomTable from "@/components/templates/ui/organisms/CustomTable";
import Layout from "@/components/templates/ui/organisms/Layout";
import { env } from "@/config/env";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Orders = () => {
  const [rows, setRows] = useState([
    {
      id: 0,
      date: "data",
      cpf: 2,
      payment_method: "prazo",
      itens_qtd: 2,
      total_value: 3,
    },
  ]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(`${env.apiBaseUrl}/pedido`);

      const orders = response.data.pedidos.map((order: any) => ({
        id: order.id,
        date: order.data,
        cpf: order.cpf,
        payment_method: order.forma_pagamento,
        itens_qtd: order.quantidade_itens,
        total_value: order.valor_total,
      }));

      setRows(orders);
    };

    fetchOrders();
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
      id: "date",
      numeric: false,
      disablePadding: false,
      label: "Data",
    },
    {
      id: "cpf",
      numeric: true,
      disablePadding: false,
      label: "Cpf",
    },
    {
      id: "payment_method",
      numeric: false,
      disablePadding: false,
      label: "Forma de Pagamento",
    },
    {
      id: "itens_qtd",
      numeric: true,
      disablePadding: false,
      label: "Quantidade",
    },
    {
      id: "total_value",
      numeric: true,
      disablePadding: false,
      label: "Valor Total",
    },
  ];

  return (
    <Layout>
      <Box> Lista de Pedidos </Box>
      <CustomTable rows={rows} headCells={headCells} />
    </Layout>
  );
};

export default Orders;
