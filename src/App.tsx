import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Inject, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import './App.css';

function App() {
  const sortingOptions: SortSettingsModel = {
    columns: [{ field: 'OrderID', direction: 'Ascending' }]
  };
  const sortComparer = (reference: any, comparer: any) => {
    if (reference < comparer) {
      return -1;
    }
    if (reference > comparer) {
      return 1;
    }
    return 0;
  };
  return (
    <GridComponent dataSource={data} allowSorting={true} sortSettings={sortingOptions} allowMultiSorting={true}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' sortComparer={sortComparer}/>
        <ColumnDirective field='CustomerID' headerText='Customer Name' />
        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' textAlign='Right' />
        <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent>
  )
};
export default App;