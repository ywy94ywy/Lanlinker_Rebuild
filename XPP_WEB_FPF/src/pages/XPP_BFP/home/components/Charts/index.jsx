import numeral from 'numeral';
import ChartCard from './ChartCard';
import Field from './Field';
import MiniArea from './MiniArea';
import MiniBar from './MiniBar';
import MiniProgress from './MiniProgress';
import Pie from './Pie';

const yuan = val => `¥ ${numeral(val).format('0,0')}`;

const Charts = {
  yuan,
  Pie,
  MiniBar,
  MiniArea,
  MiniProgress,
  ChartCard,
  Field,
};
export { Charts as default, yuan, Pie, MiniBar, MiniArea, MiniProgress, ChartCard, Field };
