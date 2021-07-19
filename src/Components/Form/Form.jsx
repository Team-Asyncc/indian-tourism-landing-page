import React, { useState } from 'react';
import './Form.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
    query: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     await axios.put(
        'https://async-tourism.herokuapp.com/add',
        data
      );
      toast.success('Got Your Query, Will Revert You Shortly 🚀');
      setData({ ...data, username: '', email: '', phone: '', query: '' });
    } catch (e) {
      console.log(e);
      toast.error('Something went Wrong...😓');
    }
  };

  return (
    <div
      className="container"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          boxShadow: '0 0 20px #0003',
          height: '100%',
          borderRadius: '18px',
          maxWidth: '800px',
          padding: '60px 60px',
          width: 'calc(100% - 100px)',
          maxHeight: '100%',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Ask Your Query</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
              name="username"
              required
              value={data.username}
              onChange={(e) => {
                setData({ ...data, username: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlInput2">Email</label>
            <input
              style={{ marginLeft: '10px' }}
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              required
              placeholder="name@example.com"
              name="email"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlInput3">Phone</label>
            <input
              style={{ marginLeft: '4px' }}
              type="tel"
              pattern="[1-9]{1}[0-9]{9}"
              className="form-control"
              required
              id="exampleFormControlInput3"
              placeholder="Phone No"
              name="phone"
              value={data.phone}
              onChange={(e) => {
                setData({ ...data, phone: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="exampleFormControlTextarea1"
              style={{ textAlign: 'justify' }}
            >
              Query
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="query"
              required
              value={data.query}
              onChange={(e) => {
                setData({ ...data, query: e.target.value });
              }}
            ></textarea>
          </div>

          <div className="btn-group">
            <button className="btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
