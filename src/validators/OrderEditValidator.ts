import * as Yup from "yup";

export const OrderEditValidator = () => {
  return Yup.object().shape({
    date: Yup.string()
      .required("Campo obrigatório")
      .min(10, "Campo deve ter no minimo ${min} caractetes")
      .max(10, "Campo deve ter no máximo ${max} caracteres"),
    cpf: Yup.number()
      .required("Campo obrigatório")
      .min(11111111111, "Campo deve ter no minimo ${min}")
      .max(99999999999, "Campo deve ter no máximo ${max}"),
    payment_method: Yup.string()
      .required()
      .min(5, "A forma de pagamento deve ter no mínimo ${min} caracteres"),
    itens_qtd: Yup.number().min(
      1,
      "A quantidade de itens deve ser no mínimo ${min}"
    ),
    total_value: Yup.number().max(
      0.01,
      "O valor total deve ser no mínimo ${min}"
    ),
  });
};
