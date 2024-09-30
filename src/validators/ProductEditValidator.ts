import * as Yup from "yup";

export const ProductEditValidator = () => {
  return Yup.object().shape({
    description: Yup.string()
      .required("Campo obrigatório")
      .min(3, "Campo deve ter no minimo ${min} caractetes")
      .max(100, "Campo deve ter no máximo ${max} caracteres"),
    brand: Yup.string()
      .required("Campo obrigatório")
      .max(80, "Campo deve ter no máximo ${max}"),
    value: Yup.number()
      .required()
      .min(0.01, "O valor deve ser no mínimo ${min}"),
    weight: Yup.number().min(0.01, "O peso deve ser no mínimo ${min}"),
    flavor: Yup.string().max(
      50,
      "O sabor deve ter no máximo ${max} caracteres"
    ),
  });
};
