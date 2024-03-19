import HomeIcon from '@mui/icons-material/Home';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface Menu {
  id: number;
  title: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

export const menu: Menu[] = [
  { id: 1, title: 'Todo List', link: '/my-todos', icon: HomeIcon },
  { id: 2, title: 'My Profile', link: '/my-profile', icon: AccountBoxOutlinedIcon }
];
