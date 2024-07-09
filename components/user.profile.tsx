import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import { RootState } from '@/store/store';

import { AuthState } from '@/store/models/auth';
import { RematchDispatch } from '@rematch/core';
import { RootModel } from '@/store/models';
import { connect } from 'react-redux';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { delay } from '@/utils/delay';
import { UserInfo, UserState } from '@/store/models/user';

const mapState = (rootState: RootState)=>{
  return ({
    auth: rootState.auth,
    authLoading: rootState.loading.models.auth    ,
    user: rootState.user
  });
}



const  UserProfile = (props: any)=> {
  const [isLogoutInitiated, setIsLogoutInitiated] = React.useState(false);
  const router = useRouter();
  const {dispatch, authLoading, auth, user}:{authLoading: boolean, auth: AuthState, dispatch: RematchDispatch<RootModel>, user: UserState} = props;

  const [userToEdit, setUserToEdit] = React.useState<UserInfo>({
    country: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    role: ""
  });

  useEffect(()=>{
    console.log("user.currentUser:", user.currentUser);
    if(user.currentUser){
      setUserToEdit(user.currentUser)
    }else{
      setUserToEdit({
        country: "",
        email: "",
        firstName: "",
        id: "",
        lastName: "",
        role: ""
      })   
    }
    
  }, [user.currentUser]);
  
  const logout = ()=>{
    console.log("Logging out")
    setIsLogoutInitiated(true);
    dispatch.auth.logout();
  }

  const navigateToLogin = React.useCallback(async ()=>{
    await delay(800);
    router.replace('/login');
  },[router]);

  useEffect(()=>{
    if(!auth.isLoggedIn && isLogoutInitiated){
      navigateToLogin();
    }
  }, [navigateToLogin, auth.isLoggedIn, isLogoutInitiated]);

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon />}
            sx={{ pl: 0 }}
          >
            <Link
              underline="none"
              color="neutral"
              href="#some-link"
              aria-label="Home"
            >
              <HomeRoundedIcon />
            </Link>
            <Link
              underline="hover"
              color="neutral"
              href="#some-link"
              fontSize={12}
              fontWeight={500}
            >
              Users
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={12}>
              My profile
            </Typography>
          </Breadcrumbs>
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            My profile
          </Typography>
          <Button loading={authLoading} sx={{ mt: 1, mb: 2 }} onClick={logout}>Logout</Button>
        </Box>
      </Box>
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will apper to the networks.
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                  srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>

            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Name </FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input value={userToEdit.firstName} size="sm" placeholder="First name" />
                </FormControl>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input value={userToEdit.lastName} size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input value={userToEdit.role} size="sm"  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    
                    value={userToEdit.email}
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>

            </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
              <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                <Button size="sm" variant="outlined" color="neutral">
                  Cancel
                </Button>
                <Button size="sm" variant="solid">
                  Save
                </Button>
              </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
    </Box>
  );
}

export default connect(mapState, null)(UserProfile);