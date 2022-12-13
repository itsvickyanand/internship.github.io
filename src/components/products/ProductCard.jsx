import React from 'react'
import { Box, Text, Image, Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

function ProductCard() {
  const property = {
    // imageUrl:
    // 'https://pg-edtr.archiproducts.com/desktop_1030x870_a77c2330-d785-4e96-8322-5503a84f33e3.jpg',
    //imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    //title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box
      maxW=""
      h="450px"
      color="white"
      borderWidth="1px"
      borderRadius="20px"
      overflow="hidden"
      backgroundImage="https://pg-edtr.archiproducts.com/desktop_1454x870_31fb82c8-a0e0-4765-a6dc-90c377131ba6.jpg"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Text style={{ marginLeft: '10px' }}>
        <h1>Archiproducts</h1>
        <p>Discover the latest novelties in Archiproducts Shop</p>
      </Text>
      {/* <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box> */}
    </Box>
  )
}

export default ProductCard
