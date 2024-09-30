"use client";
import Layout from "@/components/templates/ui/organisms/Layout";
import { IOrder } from "@/interfaces/IOrder";
import { OrderEditValidator } from "@/validators/OrderEditValidator";
import { TextField, Select, MenuItem, Button, Box } from "@mui/material";
import { useFormik, validateYupSchema } from "formik";

const EditTemplate: React.FC = () => {
  const formik = useFormik<IOrder>({
    initialValues: {
      date: "",
      cpf: 0,
      payment_method: "",
      itens_qtd: 0,
      total_value: 0,
    },

    validationSchema: OrderEditValidator,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, values, handleChange, setFieldValue, errors } = formik;

  //<div>{params.slug}</div>;
  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="date"
          label="Data"
          fullWidth
          value={values.date}
          onChange={handleChange}
          error={!!errors.date}
          helperText={errors.date}
        />
        <TextField
          name="cpf"
          label="CPF"
          fullWidth
          value={values.cpf}
          onChange={handleChange}
          error={!!errors.cpf}
          helperText={errors.cpf}
        />
        <TextField
          name="payment_method"
          label="Método de pagamento"
          fullWidth
          value={values.payment_method}
          onChange={handleChange}
          error={!!errors.payment_method}
          helperText={errors.payment_method}
        />
        <TextField
          name="itens_qtd"
          label="Quantidade de itens"
          fullWidth
          value={values.itens_qtd}
          onChange={handleChange}
          error={!!errors.itens_qtd}
          helperText={errors.itens_qtd}
        />
        <TextField
          name="total_value"
          label="Valor Total"
          fullWidth
          value={values.total_value}
          onChange={handleChange}
          error={!!errors.total_value}
          helperText={errors.total_value}
        />
        <Button variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Atualizar
        </Button>
      </Box>
    </Layout>
  );
};

export default EditTemplate;
