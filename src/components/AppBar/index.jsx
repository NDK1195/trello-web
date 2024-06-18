import { HelpOutline, NotificationsNone } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import { Badge, Box, Button, SvgIcon, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import TrelloLogo from '../../assets/trello.svg?react';
import ModeSelect from '../ModeSelect';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import Workspaces from './Menus/Workspaces';
import Profiles from './Menus/Profiles';

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: theme => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon
            component={TrelloLogo}
            inheritViewBox
            sx={{ color: 'primary.main' }}
          />
          <Typography
            variant='span'
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            Trello
          </Typography>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />

          <Button variant='outlined'>Create</Button>
        </Box>
        {/* <Workspaces /> */}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id='outlined-search'
          label='Search...'
          type='search'
          size='small'
        />
        <ModeSelect />

        <Tooltip title='Notification'>
          <Badge color='primary' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNone />
          </Badge>
        </Tooltip>

        <Tooltip title='Help'>
          <HelpOutline sx={{ cursor: 'pointer' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  );
}
export default AppBar;