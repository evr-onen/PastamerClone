// ** Reaxt / Next Core
import React, { ReactNode } from "react"
import { useRouter } from "next/router"

// ** MUI imports
import { Box, Collapse, Grid, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material"

// ** Icons
import { BsBoxSeam, BsTags, BsImages, BsWrench, BsChatRightText, BsChevronCompactDown, BsChevronCompactUp } from "react-icons/Bs"

// ** Types
interface PropsType {
  children: ReactNode
}

const index = (props: PropsType) => {
  const { children } = props
  const router = useRouter()
  console.log(router)
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <Grid container className="insideWrapper" justifyContent="center" mx="auto">
      <Grid item xs={12} px="4rem">
        <Grid container columnSpacing={4}>
          <Grid item minWidth="333px">
            <Box sx={{ border: "0.5px solid lightGrey" }} p="1rem">
              <List sx={{ width: "300px" }} component="nav" aria-labelledby="nested-list-subheader">
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "1.1rem",
                    my: "0.25rem",
                    height: "1.75rem",
                    lineHeight: "27px",
                    borderRadius: "10px",
                  }}
                >
                  Dashboard
                </ListSubheader>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/dashboard"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/dashboard")
                  }}
                >
                  <ListItemIcon>
                    <BsChatRightText />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/dashboard/users"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/dashboard/users")
                  }}
                >
                  <ListItemIcon>
                    <BsChatRightText />
                  </ListItemIcon>
                  <ListItemText primary="Users" />
                </ListItemButton>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/dashboard/permisions"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/dashboard/permisions")
                  }}
                >
                  <ListItemIcon>
                    <BsChatRightText />
                  </ListItemIcon>
                  <ListItemText primary="Permissions" />
                </ListItemButton>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/dashboard/messages"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/dashboard/messages")
                  }}
                >
                  <ListItemIcon>
                    <BsChatRightText />
                  </ListItemIcon>
                  <ListItemText primary="Messages" />
                </ListItemButton>
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "1.1rem",
                    my: "0.25rem",
                    height: "1.75rem",
                    lineHeight: "27px",
                    borderRadius: "10px",
                  }}
                >
                  Blog
                </ListSubheader>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/blog/create"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/blog/create")
                  }}
                >
                  <ListItemIcon>
                    <BsChatRightText />
                  </ListItemIcon>
                  <ListItemText primary="Create" />
                </ListItemButton>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/blog/list"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/blog/list")
                  }}
                >
                  <ListItemIcon>
                    <BsChatRightText />
                  </ListItemIcon>
                  <ListItemText primary="List" />
                </ListItemButton>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/blog/blog-category"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/blog/blog-category")
                  }}
                >
                  <ListItemIcon>
                    <BsTags />
                  </ListItemIcon>
                  <ListItemText primary="Blog Category" />
                </ListItemButton>
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "1.1rem",
                    my: "0.25rem",
                    height: "1.75rem",
                    lineHeight: "27px",
                    borderRadius: "10px",
                  }}
                >
                  Create
                </ListSubheader>

                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/create/product"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/create/product")
                  }}
                >
                  <ListItemIcon>
                    <BsBoxSeam />
                  </ListItemIcon>
                  <ListItemText primary="Product" />
                </ListItemButton>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/create/category"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/create/category")
                  }}
                >
                  <ListItemIcon>
                    <BsTags />
                  </ListItemIcon>
                  <ListItemText primary="Category" />
                </ListItemButton>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/create/variant"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/create/variant")
                  }}
                >
                  <ListItemIcon>
                    <BsTags />
                  </ListItemIcon>
                  <ListItemText primary="Variant" />
                </ListItemButton>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/create/properties"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/create/properties")
                  }}
                >
                  <ListItemIcon>
                    <BsTags />
                  </ListItemIcon>
                  <ListItemText primary="Properties" />
                </ListItemButton>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/create/images"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/create/images")
                  }}
                >
                  <ListItemIcon>
                    <BsImages />
                  </ListItemIcon>
                  <ListItemText primary="Images" />
                </ListItemButton>

                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "1.1rem",
                    my: "0.25rem",
                    height: "1.75rem",
                    lineHeight: "27px",
                    borderRadius: "10px",
                  }}
                >
                  Site Options
                </ListSubheader>
                <ListItemButton
                  sx={{ borderRadius: "1rem", m: "0.5rem", height: "2.25rem" }}
                  selected={router.asPath === "/admin-panel/options"}
                  onClick={(e) => {
                    e.preventDefault
                    router.push("/admin-panel/options")
                  }}
                >
                  <ListItemIcon>
                    <BsWrench />
                  </ListItemIcon>
                  <ListItemText primary="Site Options" />
                </ListItemButton>
              </List>
            </Box>
          </Grid>
          <Grid item width="calc(100% - 393px )">
            <Box sx={{ border: "0.5px solid lightGrey" }} p="1rem" width="100%" height="85vh">
              {children}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
