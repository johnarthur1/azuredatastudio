/**
 * Dusky API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LabelSelector } from './v1LabelSelector';

export class V1PodAffinityTerm {
    'labelSelector'?: V1LabelSelector;
    'namespaces'?: Array<string>;
    'topologyKey'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "labelSelector",
            "baseName": "labelSelector",
            "type": "V1LabelSelector"
        },
        {
            "name": "namespaces",
            "baseName": "namespaces",
            "type": "Array<string>"
        },
        {
            "name": "topologyKey",
            "baseName": "topologyKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1PodAffinityTerm.attributeTypeMap;
    }
}

