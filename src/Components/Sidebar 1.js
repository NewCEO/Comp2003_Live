import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';


function FilterBar() {
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleInStockChange = (event) => {
    setShowInStockOnly(event.target.checked);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleLocationChange = (event) => {
    const location = event.target.value;
    const isChecked = event.target.checked;
    setSelectedLocations((prevLocations) => {
      if (isChecked) {
        return [...prevLocations, location];
      } else {
        return prevLocations.filter((prevLocation) => prevLocation !== location);
      }
    });
  };

  const handleReset = () => {
    setShowInStockOnly(false);
    setSelectedModel('');
    setSelectedPriceRange('');
    setSelectedLocations([]);
  };

  const handleApply = () => {
    // Do something with the selected filters
  };

  return (
    <div style={{ width: '100%', height: '100%', margin: '20px' }}>
      <Container>        
        <div style={{ margin: '20px' }}>
          <Form style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
          <h3>Filters</h3>
            <div style={{ marginBottom: '20px' }}>
              <Form.Group className="mt-5">
                <Form.Check
                  type="switch"
                  id="in-stock-switch"
                  label="Hide out of stock"
                  checked={showInStockOnly}
                  onChange={handleInStockChange}
                />
              </Form.Group>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Form.Group className="mt-5">
                <Form.Label>Model</Form.Label>
                <Form.Control as="select" value={selectedModel} onChange={handleModelChange}>
                  <option value="">Select a model</option>
                  <option value="speed-master-1000">Speed Master 1000</option>
                  <option value="speed-master-2000">Speed Master 2000</option>
                  <option value="speed-master-3000">Speed Master 3000</option>
                  <option value="speed-master-4000">Speed Master 4000</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Form.Group className="mt-5">
                <Form.Label>Price range</Form.Label>
                <Form.Control as="select" value={selectedPriceRange} onChange={handlePriceRangeChange}>
                  <option value="">Select a price range</option>
                  <option value="0-999">£0-999</option>
                  <option value="1000-2999">£1000-2999</option>
                  <option value="3000-5999">£3000-5999</option>
                  <option value="6000-8999">£6000-8999</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Form.Group className="mt-5">
                <Form.Label>Locations</Form.Label>
                <div>
                  <Form.Check
                    type="checkbox"
                    label="The Americas"
                    value="The Americas"
                    checked={selectedLocations.includes('The Americas')}
                    onChange={handleLocationChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Australia/Asia"
                    value="Australia/Asia"
                    checked={selectedLocations.includes('Australia/Asia')}
                    onChange={handleLocationChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Mediterranean/Europe"
                    value="Mediterranean/Europe"
                    checked={selectedLocations.includes('Mediterranean/Europe')}
                    onChange={handleLocationChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Uk & Ireland"
                    value="Uk & Ireland"
                    checked={selectedLocations.includes('Uk & Ireland')}
                    onChange={handleLocationChange}
                  />
                </div>
              </Form.Group>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="secondary" onClick={handleReset}>
                Reset filter
              </Button>
              <Button variant="primary" onClick={handleApply}>
                Apply filter
              </Button>
            </div>
          </Form>
        </div>
      </Container>     
    </div>
  );
}

export default FilterBar;
                
