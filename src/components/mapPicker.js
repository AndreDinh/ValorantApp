import {maps} from './items';
import Picker from './pickerComponent';
export default function Mappicker() {

  return (
    <>
      <Picker
        title="Maps"
        itemClass="maps-class"
        items={maps}
        maxPickCount={3}
      />
    </>
  );
}
