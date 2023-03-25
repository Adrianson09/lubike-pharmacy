import NextLink from 'next/link'
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';




export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref legacyBehavior>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h6'>luBike |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>
            </NextLink>

            {/* Todo flex */}
            <Box flex={1}/>
                <Box sx={{ display: {xs: 'none', sm: 'block'}}}>
                <NextLink href='/category/bicicletas' passHref legacyBehavior>
                    <Link>  
                        <Button>Bicicletas</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/accesorios' passHref legacyBehavior>
                    <Link>  
                        <Button>Accesorios</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/repuestos' passHref legacyBehavior>
                    <Link>  
                        <Button>Repuestos</Button>
                    </Link>
                </NextLink>
                </Box>
            

            {/* Todo flex */}

            <Box flex={ 1 }/>

            <IconButton>
                <SearchOutlined/>
            </IconButton>

            <NextLink href='/cart' passHref legacyBehavior>
                <Link>
                    <IconButton>
                        <Badge badgeContent={ 2 } color="secondary">

                        <ShoppingCartOutlined/>
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>

            <Button>
                Menú
            </Button>


        </Toolbar>
    </AppBar>
  )
}
