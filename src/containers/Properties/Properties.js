import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useQuery, gql } from '@apollo/client';

const ADS = gql`
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

const Properties = ({ APIRoute }) => {
  const { loading, error, data } = useQuery(ADS);
  return (
    <Container className="p-2">
      <Row>
        {loading ? <p>Loading...</p> : ''}
        {error ? <p>Error: {error.message}</p> : ''}
        {data?.advertisements.data.map((ad) => {
          const {
            title,
            bedrooms,
            bathrooms,
            area,
            area_unit,
            price,
            currency,
            location,
            thumbnail,
          } = ad.attributes;
          const thumbUrl = thumbnail.data.attributes.url;
          return (
            <Col key={ad.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={APIRoute + thumbUrl} />
                <Card.Body>
                  <Card.Title className="display-6">{title}</Card.Title>
                  <Card.Text className="lead">{location}</Card.Text>
                  <Card.Text>{bedrooms} Bedrooms</Card.Text>
                  <Card.Text>{bathrooms} Bathrooms</Card.Text>
                  <Card.Text>{`${area} ${area_unit}`}</Card.Text>
                  <Card.Text>{`${price} ${currency}`}</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Properties;
