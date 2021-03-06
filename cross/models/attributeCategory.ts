import { IAttribute } from './attribute';
import { EFieldType } from "@diaspora/diaspora";
import { Raw } from "@diaspora/diaspora/dist/types/types/modelDescription";

export interface IAttributeCategory{
	uid: string;
	name?: string;
	attributes?: IAttribute[];
}
export const attributeCategory: Raw.IAttributesDescription = {
	uid: {
		type: EFieldType.STRING,
		required: true,
	},
	name: EFieldType.STRING,
};
