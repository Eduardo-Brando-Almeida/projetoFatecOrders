import Layout from "@/components/templates/ui/organisms/Layout";
import { TextField } from "@mui/material";

interface ProductEditProps {
  params: { slug: string };
}

export const ProductEdit: React.FC<ProductEditProps> = ({ params }) => {
  //<div>{params.slug}</div>;
  return (
    <Layout>
      <TextField name="description" label="Descrição" fullWidth />
    </Layout>
  );
};

export default ProductEdit;
