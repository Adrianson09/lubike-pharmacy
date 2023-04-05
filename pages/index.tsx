import type {NextPage} from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from "../Components/layouts";
import { initialData } from '../database/products';
import { ProductList } from '../Components/products';



 const Home: NextPage =( ) => {
  return (
    <ShopLayout title={"Bike Pharmacy - Home"} pageDescription={"Bike shop tienda y ciclo para bicicletas en Costa Rica"}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{mb: 1}} >Todos los Productos</Typography>

      <ProductList
      products={ initialData.products as any}
      />
    </ShopLayout>
  )
}

export default Home