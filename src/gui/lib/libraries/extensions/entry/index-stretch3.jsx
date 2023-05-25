import formatMessage from 'format-message';

/**
 * EuRate Boson extension
 */

import microbitMoreIconURL from './entry-icon.png';
import microbitMoreInsetIconURL from './inset-icon.svg';
import microbitMoreConnectionIconURL from './connection-icon.svg';
import microbitMoreConnectionSmallIconURL from './connection-small-icon.svg';
import translations from './translations.json';

const version = 'v2-0.2.5';

const entry = {
    get name () {
        return `${formatMessage({
            defaultMessage: 'Boson',
            description: 'Name of this extension',
            id: 'mbitMore.entry.name'
        })} (${version})`;
    },
    extensionId: 'microbitMore',
    extensionURL: null,
    collaborator: 'Simone Davi',
    iconURL: microbitMoreIconURL,
    insetIconURL: microbitMoreInsetIconURL,
    get description () {
        return formatMessage({
            defaultMessage: 'Play with all functions of micro:bit.',
            description: "Description for the 'EuRate Boson' extension",
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
    translationMap: translations
};

export default entry;
