import Layout from "@/components/templates/ui/organisms/Layout";
import { TextField } from "@mui/material";

interface OrderEditProps {
  params: { slug: string };
}

export const OrderEdit: React.FC<OrderEditProps> = ({ params }) => {
  //<div>{params.slug}</div>;
  return (
    <Layout>
      <TextField name="description" label="Descrição" fullWidth />
    </Layout>
  );
};

export default OrderEdit;
