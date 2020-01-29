import "reflect-metadata";

import {plainToClass} from "class-transformer";
import {IsString} from 'class-validator'

console.log('test project for: https://github.com/typestack/class-transformer/issues/324');

class MyPayload {
    @IsString()
    prop: string;
}

const result1 = plainToClass(MyPayload, { prop: 1234 }, { enableImplicitConversion: true });
const result2 = plainToClass(MyPayload, { prop: 1234 }, { enableImplicitConversion: false });

/**
 *  result1 will be `{ prop: "1234" }` - notice how the prop value has been converted to string.
 *  result2 will be `{ prop: 1234 }` - default behaviour
 */

console.log(result1); // MyPayload { prop: '1234' }
console.log(typeof result1.prop); // string
console.log(result2); // MyPayload { prop: 1234 }