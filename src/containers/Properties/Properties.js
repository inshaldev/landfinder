import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../contexts/DataContext';
import '../../stylesheets/styles.css';
const Properties = ({ APIRoute }) => {
  const navigate = useNavigate();
  const { loading, error, ads } = useData();
  return (
    <Container className="p-4">
      <Row>
        {loading ? <p>Loading...</p> : ''}
        {error ? <p>Error: {error.message}</p> : ''}
        {ads?.map((ad) => {
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
            <Card key={ad.id} className="mb-4">
              <Row>
                <Col className="col-12 col-md-5 p-0">
                  <Card.Img variant="top" src={APIRoute + thumbUrl} />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title className="display-6">{title}</Card.Title>
                    <Card.Text className="lead">In {location}</Card.Text>
                    <div className="d-flex gap-1">
                      <Card.Text>{bedrooms} Bed,</Card.Text>
                      <Card.Text>{bathrooms} Bath,</Card.Text>
                      <Card.Text>{`${area} ${area_unit}`}.</Card.Text>
                    </div>
                    <Card.Text className="lead text-primary fw-bold">{`${price} ${currency}`}</Card.Text>
                    <Button
                      onClick={() => {
                        navigate(`${ad.id}`);
                      }}
                      variant="primary"
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Properties;
