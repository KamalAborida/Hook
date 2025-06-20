import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'

export default function MainLayout() {
  return (
    <Box position={"absolute"} w={"100%"} p={0}>
      <Navbar />
      <Box h={"101.5999984741211px"} />
      <Outlet />
      <Footer />
    </Box>
  )
}
