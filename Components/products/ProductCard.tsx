import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import NextLink from "next/link";
import { FC, useMemo, useState } from 'react';
import { IProduct } from '../../interfaces';

interface Props {
    product: IProduct;
}




export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
    ? `products/${ product.images[1]}`
    : `products/${ product.images[0]}`
  }, [isHovered, product.images])

  return (
    <Grid item
    xs={6}
    sm={ 4 }
    onMouseEnter={ () => setIsHovered(true)}
    onMouseLeave={ () => setIsHovered(false)}
       >
        <Card>
          <NextLink href="product/slug" passHref prefetch={ false }>
            <Link href={'product/slug'}>
              <CardActionArea>
                <CardMedia
                component='img'
                className='fadeIn'
                image={productImage}
                alt={product.title}
                />
              </CardActionArea>
            </Link>
          </NextLink>
        </Card>
        
        <Box sx={{ mt: 1}} className= 'fadeIn'>
            <Typography fontWeight={700}>{product.title}</Typography>
            <Typography fontWeight={500}>{`$${product.price}`}</Typography>
        </Box>
    </Grid>
  )
}
