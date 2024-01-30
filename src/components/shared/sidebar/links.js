import AccountsIcon from "@mui/icons-material/ContactPage";
import ApplicantsIcon from "@mui/icons-material/Group";
import ClientsIcon from "@mui/icons-material/AssignmentInd";
import PostsIcon from "@mui/icons-material/PostAdd";
import JobsIcon from "@mui/icons-material/Work";

import ProfileIcon from "@mui/icons-material/AccountCircle";
import OrderIcon from "@mui/icons-material/ShoppingCart";
import MediaFileIcon from "@mui/icons-material/Collections";

const IconSize = "medium";
export const lists = [
  // Landing page links
  //   Admin page links
  {
    name: "accounts",
    link: "/accounts",
    role: 1,
    icon: <AccountsIcon fontSize={IconSize} />,
  },
  {
    name: "applicants",
    link: "/applicants",
    role: 1,
    icon: <ApplicantsIcon fontSize={IconSize} />,
  },
  {
    name: "clients",
    link: "/clients",
    role: 1,
    icon: <ClientsIcon fontSize={IconSize} />,
  },
  {
    name: "posts",
    link: "/posts",
    role: 1,
    icon: <PostsIcon fontSize={IconSize} />,
  },
  {
    name: "jobs",
    link: "/jobs",
    role: 1,
    icon: <JobsIcon fontSize={IconSize} />,
  },
  // Client page links
  {
    name: "profile",
    link: "/profile",
    role: 2,
    icon: <ProfileIcon fontSize={IconSize} />,
  },
  {
    name: "orders",
    link: "/orders",
    role: 2,
    icon: <OrderIcon fontSize={IconSize} />,
  },
  {
    name: "media files",
    link: "/mediaFiles",
    role: 2,
    icon: <MediaFileIcon fontSize={IconSize} />,
  },
  //  Applicants page links
  {
    name: "profile",
    link: "/profile",
    role: 3,
    icon: <ProfileIcon fontSize={IconSize} />,
  },
  {
    name: "orders",
    link: "/orders",
    role: 3,
    icon: <OrderIcon fontSize={IconSize} />,
  },
  {
    name: "media files",
    link: "/mediaFiles",
    role: 3,
    icon: <MediaFileIcon fontSize={IconSize} />,
  },
];
