import * as Yup from "yup";

export const OrderEditValidator = () => {
  return Yup.object().shape({
    date: Yup.string()
      .required("Campo obrigatório")
      .length(10, "A data deve ter ${length}"),
    cpf: Yup.string()
      .required("Campo obrigatório")
      .length(11, "O CPF deve ter ${length}"),
    payment_method: Yup.string()
      .required()
      .min(5, "A forma de pagamento deve ter no mínimo ${min} caracteres"),
    itens_qtd: Yup.number()
      .required("Campo obrigatório")
      .min(1, "A quantidade de itens deve ser no mínimo ${min}"),
    total_value: Yup.number()
      .required("Campo obrigatório")
      .min(0.01, "O valor total deve ser no mínimo ${min}"),
  });
};
