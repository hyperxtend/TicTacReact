// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16';
import '@babel/polyfill';
import '@testing-library/jest-dom/extend-expect';
 
configure({ adapter: new Adapter() }) 