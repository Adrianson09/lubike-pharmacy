import type {NextPage} from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from "../../Components/layouts";

export default function Home() {
  return (
    <ShopLayout title={"Bike Pharmacy - Home"} pageDescription={"Bike shop tienda y ciclo para bicicletas en Costa Rica"}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{mb: 1}} >Todos los Productos</Typography>
    </ShopLayout>
  )
}
