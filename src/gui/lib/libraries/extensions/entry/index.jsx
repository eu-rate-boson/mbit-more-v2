let formatMessage = messageData => messageData.defaultMessage;

import microbitMoreIconURL from './entry-icon.png';
import microbitMoreInsetIconURL from './inset-icon.svg';
import microbitMoreConnectionIconURL from './connection-icon.svg';
import microbitMoreConnectionSmallIconURL from './connection-small-icon.svg';

const version = 'v2-0.2.5';

const translationMap = {
    'it': {
        'gui.extension.microbitMore.description': `Gioca con tutte le funzioni di Microbit. (${version})`
    },
    'en': {
        'gui.extension.microbitMore.description': `Play with all functions of micro:bit. (${version})`
    }
};

const entry = {
    get name () {
        return `${formatMessage({
            defaultMessage: 'Boson',
            description: 'Name of this extension',
            id: 'mbitMore.entry.name'
        })} (${version})`;
    },
    extensionId: 'microbitMore',
    extensionURL: 'https://eu-rate-boson.github.io/dist/microbitMore.mjs',
    collaborator: 'Simone davi',
    iconURL: microbitMoreIconURL,
    insetIconURL: microbitMoreInsetIconURL,
    get description () {
        return formatMessage({
            defaultMessage: 'Play with all functions of micro:bit.',
            description: "Description for the 'Eurate Boson' extension",
            id: 'mbitMore.entry.description'
        });
    },
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: microbitMoreConnectionIconURL,
    connectionSmallIconURL: microbitMoreConnectionSmallIconURL,
    get connectingMessage () {
        return formatMessage({
            defaultMessage: 'Connecting',
            description: 'Message to help people connect to their micro:bit.',
            id: 'gui.extension.microbit.connectingMessage'
        });
    },
    helpLink: 'https://eu-rate-boson.github.io/',
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translations
};

export {entry}; // loadable-extension needs this line.
export default entry;
