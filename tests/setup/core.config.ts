
import { Config } from 'jest';
import { baseConfig } from './base.config';

/* 
    * Configuration object for the core module,
    * extending the base configuration. 
*/

const coreConfig: Config = {

    /* Include all properties from the baseConfig. */

    ...baseConfig,

    /* 
        * Specifies the root directories where test files are located
        * for the core module.
    */

    roots: [ '../tests/libs/core/unit-test' ],

    /* 
        * Configuration for the display name used in the test environment.
        * This helps in identifying the core module in outputs or logs
        * with specific styling.
    */

    displayName: { 

        /* The name to display, which helps identify the core module. */

        name: 'core', 

        /* 
            * The color used for the display name, making it stand out
            * in the UI or logs. 
        */
        
        color: 'redBright'

    }

};

export default async (): Promise<Config> => coreConfig;