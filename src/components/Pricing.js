import React from 'react';
import PropTypes from 'prop-types';

const PlanCard = ({ name, description, price, items }) => (
  <div className="column is-3" style={{backgroundColor: '#353535', padding: 0, width: '30%', display: 'flex', flexFlow: 'column nowrap'}}>
    <div style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1575859694244-0b337bf58e0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")`,
        height: '300px',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }} />
    <h4 style={{padding: '20px', color: '#ececec', fontFamily: 'Noto Sans JP', borderBottom: '3px solid #ececec', margin: 0}} className="has-text-centered has-text-weight-semibold">
      {name}
    </h4>
    <section style={{padding: '30px 40px'}}>
      <p className="has-text-weight-semibold">{description}</p>
      <ul>
        {items.map((item) => (
          <li key={item} className="is-size-5">
            {item}
          </li>
        ))}
      </ul>
    </section>
    <section style={{marginTop: 'auto', backgroundColor: '#ececec', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px 10px', borderRadius: '0 0 5px 5px'}}>
      <span className="is-size-1 has-text-weight-bold has-text-centered" style={{color: "#333333", fontFamily: 'Noto Sans JP'}}>
        {price}€
      </span>
    </section>
  </div>
);

const Pricing = ({ data }) => (
  <div className="columns" style={{justifyContent: 'space-between'}}>
    {data.map((planData) => <PlanCard key={planData.name} {...planData} />)}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array
    })
  )
};

export default Pricing;
