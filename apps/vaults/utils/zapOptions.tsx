import React from 'react';
import {ImageWithFallback} from '@common/components/ImageWithFallback';

import type {TSolver} from '@common/schemas/yDaemonTokenListBalances';
import type {TDropdownOption} from '@common/types/types';

type TSetZapOptionProps = {
	name: string;
	symbol: string;
	address: string;
	chainID: number;
	decimals: number;
	solveVia?: TSolver[]
}
export function	setZapOption({
	name,
	symbol,
	address,
	chainID,
	decimals,
	solveVia
}: TSetZapOptionProps): TDropdownOption {
	return ({
		label: name,
		symbol,
		value: address,
		decimals,
		solveVia,
		icon: <ImageWithFallback
			src={`${process.env.BASE_YEARN_ASSETS_URI}/${chainID}/${address}/logo-128.png`}
			alt={name}
			width={36}
			height={36} />
	});
}
