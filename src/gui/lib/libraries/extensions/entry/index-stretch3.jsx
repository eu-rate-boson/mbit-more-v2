import React from 'react';
import {FormattedMessage} from 'react-intl';

/**
 * MicroBit More extension
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';
import connectionIconURL from './connection-icon.svg';
import connectionSmallIconURL from './connection-small-icon.svg';

const version = 'v2-0.2.5';
const translations =
{
    'en': {
        'mbitMore.entry.name': 'Boson',
        'mbitMore.entry.description': `Play with all functions of micro:bit. (${version})`
    }, 'it': {
        'mbitMore.entry.name': 'Boson',
        'mbitMore.entry.description': `Gioca con tutte le funzioni di micro:bit. (${version})`
    }
};

const entry = {
    name: (
        <FormattedMessage
            defaultMessage="Boson"
            description="Name for this extension"
            id="mbitMore.entry.name"
        />
    ),
    extensionId: 'microbitMore',
    extensionURL: 'https://eu-rate-boson.github.io/dist/microbitMore.mjs',
    collaborator: 'Simone Davi',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Play with all functions of micro:bit."
            description="Description for the 'Boson' extension"
            id="mbitMore.entry.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: connectionIconURL,
    connectionSmallIconURL: connectionSmallIconURL,
    connectingMessage: (
        <FormattedMessage
            defaultMessage="Connecting"
            description="Message to help people connect to their micro:bit."
            id="gui.extension.microbitMore.description"
        />
    ),
    helpLink: 'https://eu-rate-boson.github.io/',
    translationMap: translations
};

export {entry}; // loadable-extension needs this line.
export default entry;
