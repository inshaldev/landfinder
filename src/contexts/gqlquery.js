import { gql } from '@apollo/client';
export const ADS_QUERY = gql`
  query GetAds {
    advertisements {
      data {
        id
        attributes {
          title
          type
          purpose
          floors
          area
          area_unit
          location
          currency
          price
          bedrooms
          bathrooms
          images {
            data {
              attributes {
                url
              }
            }
          }
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
