import {useState} from "react";
import ReactFlagsSelect from 'react-flags-select';

function FlagSelect(props) {
    const [selected, setSelected] = useState('TR');
    const phones = {
        US: '+1',
        DE: '+50',
        TR: '+90',
        IT: '+7',
        IN: '+15'
    }

    return (
        <ReactFlagsSelect
            selected={selected}
            onSelect={code => setSelected(code)}
            countries={Object.keys(phones)}
            customLabels={phones}
            className="flag-select"
        />
    );
}

export default FlagSelect;