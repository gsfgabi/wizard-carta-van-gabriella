
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model authorization_letters
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type authorization_letters = $Result.DefaultSelection<Prisma.$authorization_lettersPayload>
/**
 * Model authorization_letters_products
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type authorization_letters_products = $Result.DefaultSelection<Prisma.$authorization_letters_productsPayload>
/**
 * Model banks
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type banks = $Result.DefaultSelection<Prisma.$banksPayload>
/**
 * Model banks_cnabs
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type banks_cnabs = $Result.DefaultSelection<Prisma.$banks_cnabsPayload>
/**
 * Model banks_products
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type banks_products = $Result.DefaultSelection<Prisma.$banks_productsPayload>
/**
 * Model cnabs
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type cnabs = $Result.DefaultSelection<Prisma.$cnabsPayload>
/**
 * Model products
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authorization_letters
 * const authorization_letters = await prisma.authorization_letters.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authorization_letters
   * const authorization_letters = await prisma.authorization_letters.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.authorization_letters`: Exposes CRUD operations for the **authorization_letters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authorization_letters
    * const authorization_letters = await prisma.authorization_letters.findMany()
    * ```
    */
  get authorization_letters(): Prisma.authorization_lettersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authorization_letters_products`: Exposes CRUD operations for the **authorization_letters_products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authorization_letters_products
    * const authorization_letters_products = await prisma.authorization_letters_products.findMany()
    * ```
    */
  get authorization_letters_products(): Prisma.authorization_letters_productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banks`: Exposes CRUD operations for the **banks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banks
    * const banks = await prisma.banks.findMany()
    * ```
    */
  get banks(): Prisma.banksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banks_cnabs`: Exposes CRUD operations for the **banks_cnabs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banks_cnabs
    * const banks_cnabs = await prisma.banks_cnabs.findMany()
    * ```
    */
  get banks_cnabs(): Prisma.banks_cnabsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banks_products`: Exposes CRUD operations for the **banks_products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banks_products
    * const banks_products = await prisma.banks_products.findMany()
    * ```
    */
  get banks_products(): Prisma.banks_productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cnabs`: Exposes CRUD operations for the **cnabs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cnabs
    * const cnabs = await prisma.cnabs.findMany()
    * ```
    */
  get cnabs(): Prisma.cnabsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    authorization_letters: 'authorization_letters',
    authorization_letters_products: 'authorization_letters_products',
    banks: 'banks',
    banks_cnabs: 'banks_cnabs',
    banks_products: 'banks_products',
    cnabs: 'cnabs',
    products: 'products'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "authorization_letters" | "authorization_letters_products" | "banks" | "banks_cnabs" | "banks_products" | "cnabs" | "products"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      authorization_letters: {
        payload: Prisma.$authorization_lettersPayload<ExtArgs>
        fields: Prisma.authorization_lettersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorization_lettersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_lettersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorization_lettersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_lettersPayload>
          }
          findFirst: {
            args: Prisma.authorization_lettersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_lettersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorization_lettersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_lettersPayload>
          }
          findMany: {
            args: Prisma.authorization_lettersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_lettersPayload>[]
          }
          create: {
            args: Prisma.authorization_lettersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_lettersPayload>
          }
          createMany: {
            args: Prisma.authorization_lettersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authorization_lettersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_lettersPayload>[]
          }
          delete: {
            args: Prisma.authorization_lettersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_lettersPayload>
          }
          update: {
            args: Prisma.authorization_lettersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_lettersPayload>
          }
          deleteMany: {
            args: Prisma.authorization_lettersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authorization_lettersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authorization_lettersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_lettersPayload>[]
          }
          upsert: {
            args: Prisma.authorization_lettersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_lettersPayload>
          }
          aggregate: {
            args: Prisma.Authorization_lettersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthorization_letters>
          }
          groupBy: {
            args: Prisma.authorization_lettersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Authorization_lettersGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorization_lettersCountArgs<ExtArgs>
            result: $Utils.Optional<Authorization_lettersCountAggregateOutputType> | number
          }
        }
      }
      authorization_letters_products: {
        payload: Prisma.$authorization_letters_productsPayload<ExtArgs>
        fields: Prisma.authorization_letters_productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorization_letters_productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_letters_productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorization_letters_productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_letters_productsPayload>
          }
          findFirst: {
            args: Prisma.authorization_letters_productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_letters_productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorization_letters_productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_letters_productsPayload>
          }
          findMany: {
            args: Prisma.authorization_letters_productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_letters_productsPayload>[]
          }
          create: {
            args: Prisma.authorization_letters_productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_letters_productsPayload>
          }
          createMany: {
            args: Prisma.authorization_letters_productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authorization_letters_productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_letters_productsPayload>[]
          }
          delete: {
            args: Prisma.authorization_letters_productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_letters_productsPayload>
          }
          update: {
            args: Prisma.authorization_letters_productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_letters_productsPayload>
          }
          deleteMany: {
            args: Prisma.authorization_letters_productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authorization_letters_productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authorization_letters_productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_letters_productsPayload>[]
          }
          upsert: {
            args: Prisma.authorization_letters_productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorization_letters_productsPayload>
          }
          aggregate: {
            args: Prisma.Authorization_letters_productsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthorization_letters_products>
          }
          groupBy: {
            args: Prisma.authorization_letters_productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Authorization_letters_productsGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorization_letters_productsCountArgs<ExtArgs>
            result: $Utils.Optional<Authorization_letters_productsCountAggregateOutputType> | number
          }
        }
      }
      banks: {
        payload: Prisma.$banksPayload<ExtArgs>
        fields: Prisma.banksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.banksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.banksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          findFirst: {
            args: Prisma.banksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.banksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          findMany: {
            args: Prisma.banksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>[]
          }
          create: {
            args: Prisma.banksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          createMany: {
            args: Prisma.banksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.banksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>[]
          }
          delete: {
            args: Prisma.banksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          update: {
            args: Prisma.banksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          deleteMany: {
            args: Prisma.banksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.banksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.banksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>[]
          }
          upsert: {
            args: Prisma.banksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          aggregate: {
            args: Prisma.BanksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanks>
          }
          groupBy: {
            args: Prisma.banksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BanksGroupByOutputType>[]
          }
          count: {
            args: Prisma.banksCountArgs<ExtArgs>
            result: $Utils.Optional<BanksCountAggregateOutputType> | number
          }
        }
      }
      banks_cnabs: {
        payload: Prisma.$banks_cnabsPayload<ExtArgs>
        fields: Prisma.banks_cnabsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.banks_cnabsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_cnabsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.banks_cnabsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_cnabsPayload>
          }
          findFirst: {
            args: Prisma.banks_cnabsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_cnabsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.banks_cnabsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_cnabsPayload>
          }
          findMany: {
            args: Prisma.banks_cnabsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_cnabsPayload>[]
          }
          create: {
            args: Prisma.banks_cnabsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_cnabsPayload>
          }
          createMany: {
            args: Prisma.banks_cnabsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.banks_cnabsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_cnabsPayload>[]
          }
          delete: {
            args: Prisma.banks_cnabsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_cnabsPayload>
          }
          update: {
            args: Prisma.banks_cnabsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_cnabsPayload>
          }
          deleteMany: {
            args: Prisma.banks_cnabsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.banks_cnabsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.banks_cnabsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_cnabsPayload>[]
          }
          upsert: {
            args: Prisma.banks_cnabsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_cnabsPayload>
          }
          aggregate: {
            args: Prisma.Banks_cnabsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanks_cnabs>
          }
          groupBy: {
            args: Prisma.banks_cnabsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Banks_cnabsGroupByOutputType>[]
          }
          count: {
            args: Prisma.banks_cnabsCountArgs<ExtArgs>
            result: $Utils.Optional<Banks_cnabsCountAggregateOutputType> | number
          }
        }
      }
      banks_products: {
        payload: Prisma.$banks_productsPayload<ExtArgs>
        fields: Prisma.banks_productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.banks_productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.banks_productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_productsPayload>
          }
          findFirst: {
            args: Prisma.banks_productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.banks_productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_productsPayload>
          }
          findMany: {
            args: Prisma.banks_productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_productsPayload>[]
          }
          create: {
            args: Prisma.banks_productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_productsPayload>
          }
          createMany: {
            args: Prisma.banks_productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.banks_productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_productsPayload>[]
          }
          delete: {
            args: Prisma.banks_productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_productsPayload>
          }
          update: {
            args: Prisma.banks_productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_productsPayload>
          }
          deleteMany: {
            args: Prisma.banks_productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.banks_productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.banks_productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_productsPayload>[]
          }
          upsert: {
            args: Prisma.banks_productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banks_productsPayload>
          }
          aggregate: {
            args: Prisma.Banks_productsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanks_products>
          }
          groupBy: {
            args: Prisma.banks_productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Banks_productsGroupByOutputType>[]
          }
          count: {
            args: Prisma.banks_productsCountArgs<ExtArgs>
            result: $Utils.Optional<Banks_productsCountAggregateOutputType> | number
          }
        }
      }
      cnabs: {
        payload: Prisma.$cnabsPayload<ExtArgs>
        fields: Prisma.cnabsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cnabsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnabsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cnabsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnabsPayload>
          }
          findFirst: {
            args: Prisma.cnabsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnabsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cnabsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnabsPayload>
          }
          findMany: {
            args: Prisma.cnabsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnabsPayload>[]
          }
          create: {
            args: Prisma.cnabsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnabsPayload>
          }
          createMany: {
            args: Prisma.cnabsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cnabsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnabsPayload>[]
          }
          delete: {
            args: Prisma.cnabsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnabsPayload>
          }
          update: {
            args: Prisma.cnabsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnabsPayload>
          }
          deleteMany: {
            args: Prisma.cnabsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cnabsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cnabsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnabsPayload>[]
          }
          upsert: {
            args: Prisma.cnabsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnabsPayload>
          }
          aggregate: {
            args: Prisma.CnabsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCnabs>
          }
          groupBy: {
            args: Prisma.cnabsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CnabsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cnabsCountArgs<ExtArgs>
            result: $Utils.Optional<CnabsCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    authorization_letters?: authorization_lettersOmit
    authorization_letters_products?: authorization_letters_productsOmit
    banks?: banksOmit
    banks_cnabs?: banks_cnabsOmit
    banks_products?: banks_productsOmit
    cnabs?: cnabsOmit
    products?: productsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Authorization_lettersCountOutputType
   */

  export type Authorization_lettersCountOutputType = {
    authorization_letters_products: number
  }

  export type Authorization_lettersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorization_letters_products?: boolean | Authorization_lettersCountOutputTypeCountAuthorization_letters_productsArgs
  }

  // Custom InputTypes
  /**
   * Authorization_lettersCountOutputType without action
   */
  export type Authorization_lettersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization_lettersCountOutputType
     */
    select?: Authorization_lettersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Authorization_lettersCountOutputType without action
   */
  export type Authorization_lettersCountOutputTypeCountAuthorization_letters_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorization_letters_productsWhereInput
  }


  /**
   * Count Type BanksCountOutputType
   */

  export type BanksCountOutputType = {
    authorization_letters: number
    banks_cnabs: number
    banks_products: number
  }

  export type BanksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorization_letters?: boolean | BanksCountOutputTypeCountAuthorization_lettersArgs
    banks_cnabs?: boolean | BanksCountOutputTypeCountBanks_cnabsArgs
    banks_products?: boolean | BanksCountOutputTypeCountBanks_productsArgs
  }

  // Custom InputTypes
  /**
   * BanksCountOutputType without action
   */
  export type BanksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BanksCountOutputType
     */
    select?: BanksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BanksCountOutputType without action
   */
  export type BanksCountOutputTypeCountAuthorization_lettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorization_lettersWhereInput
  }

  /**
   * BanksCountOutputType without action
   */
  export type BanksCountOutputTypeCountBanks_cnabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: banks_cnabsWhereInput
  }

  /**
   * BanksCountOutputType without action
   */
  export type BanksCountOutputTypeCountBanks_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: banks_productsWhereInput
  }


  /**
   * Count Type CnabsCountOutputType
   */

  export type CnabsCountOutputType = {
    authorization_letters: number
    banks_cnabs: number
  }

  export type CnabsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorization_letters?: boolean | CnabsCountOutputTypeCountAuthorization_lettersArgs
    banks_cnabs?: boolean | CnabsCountOutputTypeCountBanks_cnabsArgs
  }

  // Custom InputTypes
  /**
   * CnabsCountOutputType without action
   */
  export type CnabsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CnabsCountOutputType
     */
    select?: CnabsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CnabsCountOutputType without action
   */
  export type CnabsCountOutputTypeCountAuthorization_lettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorization_lettersWhereInput
  }

  /**
   * CnabsCountOutputType without action
   */
  export type CnabsCountOutputTypeCountBanks_cnabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: banks_cnabsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    authorization_letters_products: number
    banks_products: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorization_letters_products?: boolean | ProductsCountOutputTypeCountAuthorization_letters_productsArgs
    banks_products?: boolean | ProductsCountOutputTypeCountBanks_productsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountAuthorization_letters_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorization_letters_productsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountBanks_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: banks_productsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model authorization_letters
   */

  export type AggregateAuthorization_letters = {
    _count: Authorization_lettersCountAggregateOutputType | null
    _avg: Authorization_lettersAvgAggregateOutputType | null
    _sum: Authorization_lettersSumAggregateOutputType | null
    _min: Authorization_lettersMinAggregateOutputType | null
    _max: Authorization_lettersMaxAggregateOutputType | null
  }

  export type Authorization_lettersAvgAggregateOutputType = {
    id: number | null
    id_banks: number | null
    id_cnabs: number | null
  }

  export type Authorization_lettersSumAggregateOutputType = {
    id: bigint | null
    id_banks: number | null
    id_cnabs: number | null
  }

  export type Authorization_lettersMinAggregateOutputType = {
    id: bigint | null
    cnpj: string | null
    corporate_name: string | null
    responsible_person_name: string | null
    responsible_person_title: string | null
    responsible_person_cellphone: string | null
    responsible_person_email: string | null
    manager_name: string | null
    manager_cellphone: string | null
    manager_email: string | null
    branch_number: string | null
    branch_dv: string | null
    account_number: string | null
    account_dv: string | null
    agreement_number: string | null
    id_banks: number | null
    id_cnabs: number | null
    created_at: Date | null
  }

  export type Authorization_lettersMaxAggregateOutputType = {
    id: bigint | null
    cnpj: string | null
    corporate_name: string | null
    responsible_person_name: string | null
    responsible_person_title: string | null
    responsible_person_cellphone: string | null
    responsible_person_email: string | null
    manager_name: string | null
    manager_cellphone: string | null
    manager_email: string | null
    branch_number: string | null
    branch_dv: string | null
    account_number: string | null
    account_dv: string | null
    agreement_number: string | null
    id_banks: number | null
    id_cnabs: number | null
    created_at: Date | null
  }

  export type Authorization_lettersCountAggregateOutputType = {
    id: number
    cnpj: number
    corporate_name: number
    responsible_person_name: number
    responsible_person_title: number
    responsible_person_cellphone: number
    responsible_person_email: number
    manager_name: number
    manager_cellphone: number
    manager_email: number
    branch_number: number
    branch_dv: number
    account_number: number
    account_dv: number
    agreement_number: number
    id_banks: number
    id_cnabs: number
    created_at: number
    _all: number
  }


  export type Authorization_lettersAvgAggregateInputType = {
    id?: true
    id_banks?: true
    id_cnabs?: true
  }

  export type Authorization_lettersSumAggregateInputType = {
    id?: true
    id_banks?: true
    id_cnabs?: true
  }

  export type Authorization_lettersMinAggregateInputType = {
    id?: true
    cnpj?: true
    corporate_name?: true
    responsible_person_name?: true
    responsible_person_title?: true
    responsible_person_cellphone?: true
    responsible_person_email?: true
    manager_name?: true
    manager_cellphone?: true
    manager_email?: true
    branch_number?: true
    branch_dv?: true
    account_number?: true
    account_dv?: true
    agreement_number?: true
    id_banks?: true
    id_cnabs?: true
    created_at?: true
  }

  export type Authorization_lettersMaxAggregateInputType = {
    id?: true
    cnpj?: true
    corporate_name?: true
    responsible_person_name?: true
    responsible_person_title?: true
    responsible_person_cellphone?: true
    responsible_person_email?: true
    manager_name?: true
    manager_cellphone?: true
    manager_email?: true
    branch_number?: true
    branch_dv?: true
    account_number?: true
    account_dv?: true
    agreement_number?: true
    id_banks?: true
    id_cnabs?: true
    created_at?: true
  }

  export type Authorization_lettersCountAggregateInputType = {
    id?: true
    cnpj?: true
    corporate_name?: true
    responsible_person_name?: true
    responsible_person_title?: true
    responsible_person_cellphone?: true
    responsible_person_email?: true
    manager_name?: true
    manager_cellphone?: true
    manager_email?: true
    branch_number?: true
    branch_dv?: true
    account_number?: true
    account_dv?: true
    agreement_number?: true
    id_banks?: true
    id_cnabs?: true
    created_at?: true
    _all?: true
  }

  export type Authorization_lettersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authorization_letters to aggregate.
     */
    where?: authorization_lettersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorization_letters to fetch.
     */
    orderBy?: authorization_lettersOrderByWithRelationInput | authorization_lettersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorization_lettersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorization_letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorization_letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authorization_letters
    **/
    _count?: true | Authorization_lettersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Authorization_lettersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Authorization_lettersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Authorization_lettersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Authorization_lettersMaxAggregateInputType
  }

  export type GetAuthorization_lettersAggregateType<T extends Authorization_lettersAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorization_letters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorization_letters[P]>
      : GetScalarType<T[P], AggregateAuthorization_letters[P]>
  }




  export type authorization_lettersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorization_lettersWhereInput
    orderBy?: authorization_lettersOrderByWithAggregationInput | authorization_lettersOrderByWithAggregationInput[]
    by: Authorization_lettersScalarFieldEnum[] | Authorization_lettersScalarFieldEnum
    having?: authorization_lettersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Authorization_lettersCountAggregateInputType | true
    _avg?: Authorization_lettersAvgAggregateInputType
    _sum?: Authorization_lettersSumAggregateInputType
    _min?: Authorization_lettersMinAggregateInputType
    _max?: Authorization_lettersMaxAggregateInputType
  }

  export type Authorization_lettersGroupByOutputType = {
    id: bigint
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    id_banks: number
    id_cnabs: number
    created_at: Date
    _count: Authorization_lettersCountAggregateOutputType | null
    _avg: Authorization_lettersAvgAggregateOutputType | null
    _sum: Authorization_lettersSumAggregateOutputType | null
    _min: Authorization_lettersMinAggregateOutputType | null
    _max: Authorization_lettersMaxAggregateOutputType | null
  }

  type GetAuthorization_lettersGroupByPayload<T extends authorization_lettersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Authorization_lettersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Authorization_lettersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Authorization_lettersGroupByOutputType[P]>
            : GetScalarType<T[P], Authorization_lettersGroupByOutputType[P]>
        }
      >
    >


  export type authorization_lettersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnpj?: boolean
    corporate_name?: boolean
    responsible_person_name?: boolean
    responsible_person_title?: boolean
    responsible_person_cellphone?: boolean
    responsible_person_email?: boolean
    manager_name?: boolean
    manager_cellphone?: boolean
    manager_email?: boolean
    branch_number?: boolean
    branch_dv?: boolean
    account_number?: boolean
    account_dv?: boolean
    agreement_number?: boolean
    id_banks?: boolean
    id_cnabs?: boolean
    created_at?: boolean
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
    authorization_letters_products?: boolean | authorization_letters$authorization_letters_productsArgs<ExtArgs>
    _count?: boolean | Authorization_lettersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization_letters"]>

  export type authorization_lettersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnpj?: boolean
    corporate_name?: boolean
    responsible_person_name?: boolean
    responsible_person_title?: boolean
    responsible_person_cellphone?: boolean
    responsible_person_email?: boolean
    manager_name?: boolean
    manager_cellphone?: boolean
    manager_email?: boolean
    branch_number?: boolean
    branch_dv?: boolean
    account_number?: boolean
    account_dv?: boolean
    agreement_number?: boolean
    id_banks?: boolean
    id_cnabs?: boolean
    created_at?: boolean
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization_letters"]>

  export type authorization_lettersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnpj?: boolean
    corporate_name?: boolean
    responsible_person_name?: boolean
    responsible_person_title?: boolean
    responsible_person_cellphone?: boolean
    responsible_person_email?: boolean
    manager_name?: boolean
    manager_cellphone?: boolean
    manager_email?: boolean
    branch_number?: boolean
    branch_dv?: boolean
    account_number?: boolean
    account_dv?: boolean
    agreement_number?: boolean
    id_banks?: boolean
    id_cnabs?: boolean
    created_at?: boolean
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization_letters"]>

  export type authorization_lettersSelectScalar = {
    id?: boolean
    cnpj?: boolean
    corporate_name?: boolean
    responsible_person_name?: boolean
    responsible_person_title?: boolean
    responsible_person_cellphone?: boolean
    responsible_person_email?: boolean
    manager_name?: boolean
    manager_cellphone?: boolean
    manager_email?: boolean
    branch_number?: boolean
    branch_dv?: boolean
    account_number?: boolean
    account_dv?: boolean
    agreement_number?: boolean
    id_banks?: boolean
    id_cnabs?: boolean
    created_at?: boolean
  }

  export type authorization_lettersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cnpj" | "corporate_name" | "responsible_person_name" | "responsible_person_title" | "responsible_person_cellphone" | "responsible_person_email" | "manager_name" | "manager_cellphone" | "manager_email" | "branch_number" | "branch_dv" | "account_number" | "account_dv" | "agreement_number" | "id_banks" | "id_cnabs" | "created_at", ExtArgs["result"]["authorization_letters"]>
  export type authorization_lettersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
    authorization_letters_products?: boolean | authorization_letters$authorization_letters_productsArgs<ExtArgs>
    _count?: boolean | Authorization_lettersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type authorization_lettersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
  }
  export type authorization_lettersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
  }

  export type $authorization_lettersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authorization_letters"
    objects: {
      banks: Prisma.$banksPayload<ExtArgs>
      cnabs: Prisma.$cnabsPayload<ExtArgs>
      authorization_letters_products: Prisma.$authorization_letters_productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      cnpj: string
      corporate_name: string
      responsible_person_name: string
      responsible_person_title: string
      responsible_person_cellphone: string
      responsible_person_email: string
      manager_name: string
      manager_cellphone: string
      manager_email: string
      branch_number: string
      branch_dv: string
      account_number: string
      account_dv: string
      agreement_number: string
      id_banks: number
      id_cnabs: number
      created_at: Date
    }, ExtArgs["result"]["authorization_letters"]>
    composites: {}
  }

  type authorization_lettersGetPayload<S extends boolean | null | undefined | authorization_lettersDefaultArgs> = $Result.GetResult<Prisma.$authorization_lettersPayload, S>

  type authorization_lettersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authorization_lettersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Authorization_lettersCountAggregateInputType | true
    }

  export interface authorization_lettersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authorization_letters'], meta: { name: 'authorization_letters' } }
    /**
     * Find zero or one Authorization_letters that matches the filter.
     * @param {authorization_lettersFindUniqueArgs} args - Arguments to find a Authorization_letters
     * @example
     * // Get one Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authorization_lettersFindUniqueArgs>(args: SelectSubset<T, authorization_lettersFindUniqueArgs<ExtArgs>>): Prisma__authorization_lettersClient<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authorization_letters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authorization_lettersFindUniqueOrThrowArgs} args - Arguments to find a Authorization_letters
     * @example
     * // Get one Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authorization_lettersFindUniqueOrThrowArgs>(args: SelectSubset<T, authorization_lettersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authorization_lettersClient<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authorization_letters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_lettersFindFirstArgs} args - Arguments to find a Authorization_letters
     * @example
     * // Get one Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authorization_lettersFindFirstArgs>(args?: SelectSubset<T, authorization_lettersFindFirstArgs<ExtArgs>>): Prisma__authorization_lettersClient<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authorization_letters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_lettersFindFirstOrThrowArgs} args - Arguments to find a Authorization_letters
     * @example
     * // Get one Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authorization_lettersFindFirstOrThrowArgs>(args?: SelectSubset<T, authorization_lettersFindFirstOrThrowArgs<ExtArgs>>): Prisma__authorization_lettersClient<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authorization_letters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_lettersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.findMany()
     * 
     * // Get first 10 Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorization_lettersWithIdOnly = await prisma.authorization_letters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authorization_lettersFindManyArgs>(args?: SelectSubset<T, authorization_lettersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authorization_letters.
     * @param {authorization_lettersCreateArgs} args - Arguments to create a Authorization_letters.
     * @example
     * // Create one Authorization_letters
     * const Authorization_letters = await prisma.authorization_letters.create({
     *   data: {
     *     // ... data to create a Authorization_letters
     *   }
     * })
     * 
     */
    create<T extends authorization_lettersCreateArgs>(args: SelectSubset<T, authorization_lettersCreateArgs<ExtArgs>>): Prisma__authorization_lettersClient<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authorization_letters.
     * @param {authorization_lettersCreateManyArgs} args - Arguments to create many Authorization_letters.
     * @example
     * // Create many Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authorization_lettersCreateManyArgs>(args?: SelectSubset<T, authorization_lettersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authorization_letters and returns the data saved in the database.
     * @param {authorization_lettersCreateManyAndReturnArgs} args - Arguments to create many Authorization_letters.
     * @example
     * // Create many Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authorization_letters and only return the `id`
     * const authorization_lettersWithIdOnly = await prisma.authorization_letters.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authorization_lettersCreateManyAndReturnArgs>(args?: SelectSubset<T, authorization_lettersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authorization_letters.
     * @param {authorization_lettersDeleteArgs} args - Arguments to delete one Authorization_letters.
     * @example
     * // Delete one Authorization_letters
     * const Authorization_letters = await prisma.authorization_letters.delete({
     *   where: {
     *     // ... filter to delete one Authorization_letters
     *   }
     * })
     * 
     */
    delete<T extends authorization_lettersDeleteArgs>(args: SelectSubset<T, authorization_lettersDeleteArgs<ExtArgs>>): Prisma__authorization_lettersClient<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authorization_letters.
     * @param {authorization_lettersUpdateArgs} args - Arguments to update one Authorization_letters.
     * @example
     * // Update one Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authorization_lettersUpdateArgs>(args: SelectSubset<T, authorization_lettersUpdateArgs<ExtArgs>>): Prisma__authorization_lettersClient<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authorization_letters.
     * @param {authorization_lettersDeleteManyArgs} args - Arguments to filter Authorization_letters to delete.
     * @example
     * // Delete a few Authorization_letters
     * const { count } = await prisma.authorization_letters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authorization_lettersDeleteManyArgs>(args?: SelectSubset<T, authorization_lettersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authorization_letters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_lettersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authorization_lettersUpdateManyArgs>(args: SelectSubset<T, authorization_lettersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authorization_letters and returns the data updated in the database.
     * @param {authorization_lettersUpdateManyAndReturnArgs} args - Arguments to update many Authorization_letters.
     * @example
     * // Update many Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authorization_letters and only return the `id`
     * const authorization_lettersWithIdOnly = await prisma.authorization_letters.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authorization_lettersUpdateManyAndReturnArgs>(args: SelectSubset<T, authorization_lettersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authorization_letters.
     * @param {authorization_lettersUpsertArgs} args - Arguments to update or create a Authorization_letters.
     * @example
     * // Update or create a Authorization_letters
     * const authorization_letters = await prisma.authorization_letters.upsert({
     *   create: {
     *     // ... data to create a Authorization_letters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authorization_letters we want to update
     *   }
     * })
     */
    upsert<T extends authorization_lettersUpsertArgs>(args: SelectSubset<T, authorization_lettersUpsertArgs<ExtArgs>>): Prisma__authorization_lettersClient<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authorization_letters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_lettersCountArgs} args - Arguments to filter Authorization_letters to count.
     * @example
     * // Count the number of Authorization_letters
     * const count = await prisma.authorization_letters.count({
     *   where: {
     *     // ... the filter for the Authorization_letters we want to count
     *   }
     * })
    **/
    count<T extends authorization_lettersCountArgs>(
      args?: Subset<T, authorization_lettersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Authorization_lettersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authorization_letters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Authorization_lettersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Authorization_lettersAggregateArgs>(args: Subset<T, Authorization_lettersAggregateArgs>): Prisma.PrismaPromise<GetAuthorization_lettersAggregateType<T>>

    /**
     * Group by Authorization_letters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_lettersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authorization_lettersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorization_lettersGroupByArgs['orderBy'] }
        : { orderBy?: authorization_lettersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authorization_lettersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorization_lettersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authorization_letters model
   */
  readonly fields: authorization_lettersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authorization_letters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorization_lettersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    banks<T extends banksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, banksDefaultArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cnabs<T extends cnabsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cnabsDefaultArgs<ExtArgs>>): Prisma__cnabsClient<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    authorization_letters_products<T extends authorization_letters$authorization_letters_productsArgs<ExtArgs> = {}>(args?: Subset<T, authorization_letters$authorization_letters_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authorization_letters model
   */
  interface authorization_lettersFieldRefs {
    readonly id: FieldRef<"authorization_letters", 'BigInt'>
    readonly cnpj: FieldRef<"authorization_letters", 'String'>
    readonly corporate_name: FieldRef<"authorization_letters", 'String'>
    readonly responsible_person_name: FieldRef<"authorization_letters", 'String'>
    readonly responsible_person_title: FieldRef<"authorization_letters", 'String'>
    readonly responsible_person_cellphone: FieldRef<"authorization_letters", 'String'>
    readonly responsible_person_email: FieldRef<"authorization_letters", 'String'>
    readonly manager_name: FieldRef<"authorization_letters", 'String'>
    readonly manager_cellphone: FieldRef<"authorization_letters", 'String'>
    readonly manager_email: FieldRef<"authorization_letters", 'String'>
    readonly branch_number: FieldRef<"authorization_letters", 'String'>
    readonly branch_dv: FieldRef<"authorization_letters", 'String'>
    readonly account_number: FieldRef<"authorization_letters", 'String'>
    readonly account_dv: FieldRef<"authorization_letters", 'String'>
    readonly agreement_number: FieldRef<"authorization_letters", 'String'>
    readonly id_banks: FieldRef<"authorization_letters", 'Int'>
    readonly id_cnabs: FieldRef<"authorization_letters", 'Int'>
    readonly created_at: FieldRef<"authorization_letters", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * authorization_letters findUnique
   */
  export type authorization_lettersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
    /**
     * Filter, which authorization_letters to fetch.
     */
    where: authorization_lettersWhereUniqueInput
  }

  /**
   * authorization_letters findUniqueOrThrow
   */
  export type authorization_lettersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
    /**
     * Filter, which authorization_letters to fetch.
     */
    where: authorization_lettersWhereUniqueInput
  }

  /**
   * authorization_letters findFirst
   */
  export type authorization_lettersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
    /**
     * Filter, which authorization_letters to fetch.
     */
    where?: authorization_lettersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorization_letters to fetch.
     */
    orderBy?: authorization_lettersOrderByWithRelationInput | authorization_lettersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authorization_letters.
     */
    cursor?: authorization_lettersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorization_letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorization_letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authorization_letters.
     */
    distinct?: Authorization_lettersScalarFieldEnum | Authorization_lettersScalarFieldEnum[]
  }

  /**
   * authorization_letters findFirstOrThrow
   */
  export type authorization_lettersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
    /**
     * Filter, which authorization_letters to fetch.
     */
    where?: authorization_lettersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorization_letters to fetch.
     */
    orderBy?: authorization_lettersOrderByWithRelationInput | authorization_lettersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authorization_letters.
     */
    cursor?: authorization_lettersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorization_letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorization_letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authorization_letters.
     */
    distinct?: Authorization_lettersScalarFieldEnum | Authorization_lettersScalarFieldEnum[]
  }

  /**
   * authorization_letters findMany
   */
  export type authorization_lettersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
    /**
     * Filter, which authorization_letters to fetch.
     */
    where?: authorization_lettersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorization_letters to fetch.
     */
    orderBy?: authorization_lettersOrderByWithRelationInput | authorization_lettersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authorization_letters.
     */
    cursor?: authorization_lettersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorization_letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorization_letters.
     */
    skip?: number
    distinct?: Authorization_lettersScalarFieldEnum | Authorization_lettersScalarFieldEnum[]
  }

  /**
   * authorization_letters create
   */
  export type authorization_lettersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
    /**
     * The data needed to create a authorization_letters.
     */
    data: XOR<authorization_lettersCreateInput, authorization_lettersUncheckedCreateInput>
  }

  /**
   * authorization_letters createMany
   */
  export type authorization_lettersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authorization_letters.
     */
    data: authorization_lettersCreateManyInput | authorization_lettersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authorization_letters createManyAndReturn
   */
  export type authorization_lettersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * The data used to create many authorization_letters.
     */
    data: authorization_lettersCreateManyInput | authorization_lettersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * authorization_letters update
   */
  export type authorization_lettersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
    /**
     * The data needed to update a authorization_letters.
     */
    data: XOR<authorization_lettersUpdateInput, authorization_lettersUncheckedUpdateInput>
    /**
     * Choose, which authorization_letters to update.
     */
    where: authorization_lettersWhereUniqueInput
  }

  /**
   * authorization_letters updateMany
   */
  export type authorization_lettersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authorization_letters.
     */
    data: XOR<authorization_lettersUpdateManyMutationInput, authorization_lettersUncheckedUpdateManyInput>
    /**
     * Filter which authorization_letters to update
     */
    where?: authorization_lettersWhereInput
    /**
     * Limit how many authorization_letters to update.
     */
    limit?: number
  }

  /**
   * authorization_letters updateManyAndReturn
   */
  export type authorization_lettersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * The data used to update authorization_letters.
     */
    data: XOR<authorization_lettersUpdateManyMutationInput, authorization_lettersUncheckedUpdateManyInput>
    /**
     * Filter which authorization_letters to update
     */
    where?: authorization_lettersWhereInput
    /**
     * Limit how many authorization_letters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * authorization_letters upsert
   */
  export type authorization_lettersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
    /**
     * The filter to search for the authorization_letters to update in case it exists.
     */
    where: authorization_lettersWhereUniqueInput
    /**
     * In case the authorization_letters found by the `where` argument doesn't exist, create a new authorization_letters with this data.
     */
    create: XOR<authorization_lettersCreateInput, authorization_lettersUncheckedCreateInput>
    /**
     * In case the authorization_letters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorization_lettersUpdateInput, authorization_lettersUncheckedUpdateInput>
  }

  /**
   * authorization_letters delete
   */
  export type authorization_lettersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
    /**
     * Filter which authorization_letters to delete.
     */
    where: authorization_lettersWhereUniqueInput
  }

  /**
   * authorization_letters deleteMany
   */
  export type authorization_lettersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authorization_letters to delete
     */
    where?: authorization_lettersWhereInput
    /**
     * Limit how many authorization_letters to delete.
     */
    limit?: number
  }

  /**
   * authorization_letters.authorization_letters_products
   */
  export type authorization_letters$authorization_letters_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
    where?: authorization_letters_productsWhereInput
    orderBy?: authorization_letters_productsOrderByWithRelationInput | authorization_letters_productsOrderByWithRelationInput[]
    cursor?: authorization_letters_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Authorization_letters_productsScalarFieldEnum | Authorization_letters_productsScalarFieldEnum[]
  }

  /**
   * authorization_letters without action
   */
  export type authorization_lettersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
  }


  /**
   * Model authorization_letters_products
   */

  export type AggregateAuthorization_letters_products = {
    _count: Authorization_letters_productsCountAggregateOutputType | null
    _avg: Authorization_letters_productsAvgAggregateOutputType | null
    _sum: Authorization_letters_productsSumAggregateOutputType | null
    _min: Authorization_letters_productsMinAggregateOutputType | null
    _max: Authorization_letters_productsMaxAggregateOutputType | null
  }

  export type Authorization_letters_productsAvgAggregateOutputType = {
    id: number | null
    id_products: number | null
    id_authorization_letters: number | null
  }

  export type Authorization_letters_productsSumAggregateOutputType = {
    id: bigint | null
    id_products: bigint | null
    id_authorization_letters: bigint | null
  }

  export type Authorization_letters_productsMinAggregateOutputType = {
    id: bigint | null
    id_products: bigint | null
    id_authorization_letters: bigint | null
  }

  export type Authorization_letters_productsMaxAggregateOutputType = {
    id: bigint | null
    id_products: bigint | null
    id_authorization_letters: bigint | null
  }

  export type Authorization_letters_productsCountAggregateOutputType = {
    id: number
    id_products: number
    id_authorization_letters: number
    _all: number
  }


  export type Authorization_letters_productsAvgAggregateInputType = {
    id?: true
    id_products?: true
    id_authorization_letters?: true
  }

  export type Authorization_letters_productsSumAggregateInputType = {
    id?: true
    id_products?: true
    id_authorization_letters?: true
  }

  export type Authorization_letters_productsMinAggregateInputType = {
    id?: true
    id_products?: true
    id_authorization_letters?: true
  }

  export type Authorization_letters_productsMaxAggregateInputType = {
    id?: true
    id_products?: true
    id_authorization_letters?: true
  }

  export type Authorization_letters_productsCountAggregateInputType = {
    id?: true
    id_products?: true
    id_authorization_letters?: true
    _all?: true
  }

  export type Authorization_letters_productsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authorization_letters_products to aggregate.
     */
    where?: authorization_letters_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorization_letters_products to fetch.
     */
    orderBy?: authorization_letters_productsOrderByWithRelationInput | authorization_letters_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorization_letters_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorization_letters_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorization_letters_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authorization_letters_products
    **/
    _count?: true | Authorization_letters_productsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Authorization_letters_productsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Authorization_letters_productsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Authorization_letters_productsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Authorization_letters_productsMaxAggregateInputType
  }

  export type GetAuthorization_letters_productsAggregateType<T extends Authorization_letters_productsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorization_letters_products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorization_letters_products[P]>
      : GetScalarType<T[P], AggregateAuthorization_letters_products[P]>
  }




  export type authorization_letters_productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorization_letters_productsWhereInput
    orderBy?: authorization_letters_productsOrderByWithAggregationInput | authorization_letters_productsOrderByWithAggregationInput[]
    by: Authorization_letters_productsScalarFieldEnum[] | Authorization_letters_productsScalarFieldEnum
    having?: authorization_letters_productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Authorization_letters_productsCountAggregateInputType | true
    _avg?: Authorization_letters_productsAvgAggregateInputType
    _sum?: Authorization_letters_productsSumAggregateInputType
    _min?: Authorization_letters_productsMinAggregateInputType
    _max?: Authorization_letters_productsMaxAggregateInputType
  }

  export type Authorization_letters_productsGroupByOutputType = {
    id: bigint
    id_products: bigint
    id_authorization_letters: bigint
    _count: Authorization_letters_productsCountAggregateOutputType | null
    _avg: Authorization_letters_productsAvgAggregateOutputType | null
    _sum: Authorization_letters_productsSumAggregateOutputType | null
    _min: Authorization_letters_productsMinAggregateOutputType | null
    _max: Authorization_letters_productsMaxAggregateOutputType | null
  }

  type GetAuthorization_letters_productsGroupByPayload<T extends authorization_letters_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Authorization_letters_productsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Authorization_letters_productsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Authorization_letters_productsGroupByOutputType[P]>
            : GetScalarType<T[P], Authorization_letters_productsGroupByOutputType[P]>
        }
      >
    >


  export type authorization_letters_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_products?: boolean
    id_authorization_letters?: boolean
    authorization_letters?: boolean | authorization_lettersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization_letters_products"]>

  export type authorization_letters_productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_products?: boolean
    id_authorization_letters?: boolean
    authorization_letters?: boolean | authorization_lettersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization_letters_products"]>

  export type authorization_letters_productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_products?: boolean
    id_authorization_letters?: boolean
    authorization_letters?: boolean | authorization_lettersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization_letters_products"]>

  export type authorization_letters_productsSelectScalar = {
    id?: boolean
    id_products?: boolean
    id_authorization_letters?: boolean
  }

  export type authorization_letters_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_products" | "id_authorization_letters", ExtArgs["result"]["authorization_letters_products"]>
  export type authorization_letters_productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorization_letters?: boolean | authorization_lettersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type authorization_letters_productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorization_letters?: boolean | authorization_lettersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type authorization_letters_productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorization_letters?: boolean | authorization_lettersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $authorization_letters_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authorization_letters_products"
    objects: {
      authorization_letters: Prisma.$authorization_lettersPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_products: bigint
      id_authorization_letters: bigint
    }, ExtArgs["result"]["authorization_letters_products"]>
    composites: {}
  }

  type authorization_letters_productsGetPayload<S extends boolean | null | undefined | authorization_letters_productsDefaultArgs> = $Result.GetResult<Prisma.$authorization_letters_productsPayload, S>

  type authorization_letters_productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authorization_letters_productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Authorization_letters_productsCountAggregateInputType | true
    }

  export interface authorization_letters_productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authorization_letters_products'], meta: { name: 'authorization_letters_products' } }
    /**
     * Find zero or one Authorization_letters_products that matches the filter.
     * @param {authorization_letters_productsFindUniqueArgs} args - Arguments to find a Authorization_letters_products
     * @example
     * // Get one Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authorization_letters_productsFindUniqueArgs>(args: SelectSubset<T, authorization_letters_productsFindUniqueArgs<ExtArgs>>): Prisma__authorization_letters_productsClient<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authorization_letters_products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authorization_letters_productsFindUniqueOrThrowArgs} args - Arguments to find a Authorization_letters_products
     * @example
     * // Get one Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authorization_letters_productsFindUniqueOrThrowArgs>(args: SelectSubset<T, authorization_letters_productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authorization_letters_productsClient<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authorization_letters_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_letters_productsFindFirstArgs} args - Arguments to find a Authorization_letters_products
     * @example
     * // Get one Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authorization_letters_productsFindFirstArgs>(args?: SelectSubset<T, authorization_letters_productsFindFirstArgs<ExtArgs>>): Prisma__authorization_letters_productsClient<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authorization_letters_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_letters_productsFindFirstOrThrowArgs} args - Arguments to find a Authorization_letters_products
     * @example
     * // Get one Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authorization_letters_productsFindFirstOrThrowArgs>(args?: SelectSubset<T, authorization_letters_productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__authorization_letters_productsClient<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authorization_letters_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_letters_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.findMany()
     * 
     * // Get first 10 Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorization_letters_productsWithIdOnly = await prisma.authorization_letters_products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authorization_letters_productsFindManyArgs>(args?: SelectSubset<T, authorization_letters_productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authorization_letters_products.
     * @param {authorization_letters_productsCreateArgs} args - Arguments to create a Authorization_letters_products.
     * @example
     * // Create one Authorization_letters_products
     * const Authorization_letters_products = await prisma.authorization_letters_products.create({
     *   data: {
     *     // ... data to create a Authorization_letters_products
     *   }
     * })
     * 
     */
    create<T extends authorization_letters_productsCreateArgs>(args: SelectSubset<T, authorization_letters_productsCreateArgs<ExtArgs>>): Prisma__authorization_letters_productsClient<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authorization_letters_products.
     * @param {authorization_letters_productsCreateManyArgs} args - Arguments to create many Authorization_letters_products.
     * @example
     * // Create many Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authorization_letters_productsCreateManyArgs>(args?: SelectSubset<T, authorization_letters_productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authorization_letters_products and returns the data saved in the database.
     * @param {authorization_letters_productsCreateManyAndReturnArgs} args - Arguments to create many Authorization_letters_products.
     * @example
     * // Create many Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authorization_letters_products and only return the `id`
     * const authorization_letters_productsWithIdOnly = await prisma.authorization_letters_products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authorization_letters_productsCreateManyAndReturnArgs>(args?: SelectSubset<T, authorization_letters_productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authorization_letters_products.
     * @param {authorization_letters_productsDeleteArgs} args - Arguments to delete one Authorization_letters_products.
     * @example
     * // Delete one Authorization_letters_products
     * const Authorization_letters_products = await prisma.authorization_letters_products.delete({
     *   where: {
     *     // ... filter to delete one Authorization_letters_products
     *   }
     * })
     * 
     */
    delete<T extends authorization_letters_productsDeleteArgs>(args: SelectSubset<T, authorization_letters_productsDeleteArgs<ExtArgs>>): Prisma__authorization_letters_productsClient<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authorization_letters_products.
     * @param {authorization_letters_productsUpdateArgs} args - Arguments to update one Authorization_letters_products.
     * @example
     * // Update one Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authorization_letters_productsUpdateArgs>(args: SelectSubset<T, authorization_letters_productsUpdateArgs<ExtArgs>>): Prisma__authorization_letters_productsClient<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authorization_letters_products.
     * @param {authorization_letters_productsDeleteManyArgs} args - Arguments to filter Authorization_letters_products to delete.
     * @example
     * // Delete a few Authorization_letters_products
     * const { count } = await prisma.authorization_letters_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authorization_letters_productsDeleteManyArgs>(args?: SelectSubset<T, authorization_letters_productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authorization_letters_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_letters_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authorization_letters_productsUpdateManyArgs>(args: SelectSubset<T, authorization_letters_productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authorization_letters_products and returns the data updated in the database.
     * @param {authorization_letters_productsUpdateManyAndReturnArgs} args - Arguments to update many Authorization_letters_products.
     * @example
     * // Update many Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authorization_letters_products and only return the `id`
     * const authorization_letters_productsWithIdOnly = await prisma.authorization_letters_products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authorization_letters_productsUpdateManyAndReturnArgs>(args: SelectSubset<T, authorization_letters_productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authorization_letters_products.
     * @param {authorization_letters_productsUpsertArgs} args - Arguments to update or create a Authorization_letters_products.
     * @example
     * // Update or create a Authorization_letters_products
     * const authorization_letters_products = await prisma.authorization_letters_products.upsert({
     *   create: {
     *     // ... data to create a Authorization_letters_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authorization_letters_products we want to update
     *   }
     * })
     */
    upsert<T extends authorization_letters_productsUpsertArgs>(args: SelectSubset<T, authorization_letters_productsUpsertArgs<ExtArgs>>): Prisma__authorization_letters_productsClient<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authorization_letters_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_letters_productsCountArgs} args - Arguments to filter Authorization_letters_products to count.
     * @example
     * // Count the number of Authorization_letters_products
     * const count = await prisma.authorization_letters_products.count({
     *   where: {
     *     // ... the filter for the Authorization_letters_products we want to count
     *   }
     * })
    **/
    count<T extends authorization_letters_productsCountArgs>(
      args?: Subset<T, authorization_letters_productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Authorization_letters_productsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authorization_letters_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Authorization_letters_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Authorization_letters_productsAggregateArgs>(args: Subset<T, Authorization_letters_productsAggregateArgs>): Prisma.PrismaPromise<GetAuthorization_letters_productsAggregateType<T>>

    /**
     * Group by Authorization_letters_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorization_letters_productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authorization_letters_productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorization_letters_productsGroupByArgs['orderBy'] }
        : { orderBy?: authorization_letters_productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authorization_letters_productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorization_letters_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authorization_letters_products model
   */
  readonly fields: authorization_letters_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authorization_letters_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorization_letters_productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authorization_letters<T extends authorization_lettersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorization_lettersDefaultArgs<ExtArgs>>): Prisma__authorization_lettersClient<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authorization_letters_products model
   */
  interface authorization_letters_productsFieldRefs {
    readonly id: FieldRef<"authorization_letters_products", 'BigInt'>
    readonly id_products: FieldRef<"authorization_letters_products", 'BigInt'>
    readonly id_authorization_letters: FieldRef<"authorization_letters_products", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * authorization_letters_products findUnique
   */
  export type authorization_letters_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
    /**
     * Filter, which authorization_letters_products to fetch.
     */
    where: authorization_letters_productsWhereUniqueInput
  }

  /**
   * authorization_letters_products findUniqueOrThrow
   */
  export type authorization_letters_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
    /**
     * Filter, which authorization_letters_products to fetch.
     */
    where: authorization_letters_productsWhereUniqueInput
  }

  /**
   * authorization_letters_products findFirst
   */
  export type authorization_letters_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
    /**
     * Filter, which authorization_letters_products to fetch.
     */
    where?: authorization_letters_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorization_letters_products to fetch.
     */
    orderBy?: authorization_letters_productsOrderByWithRelationInput | authorization_letters_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authorization_letters_products.
     */
    cursor?: authorization_letters_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorization_letters_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorization_letters_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authorization_letters_products.
     */
    distinct?: Authorization_letters_productsScalarFieldEnum | Authorization_letters_productsScalarFieldEnum[]
  }

  /**
   * authorization_letters_products findFirstOrThrow
   */
  export type authorization_letters_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
    /**
     * Filter, which authorization_letters_products to fetch.
     */
    where?: authorization_letters_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorization_letters_products to fetch.
     */
    orderBy?: authorization_letters_productsOrderByWithRelationInput | authorization_letters_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authorization_letters_products.
     */
    cursor?: authorization_letters_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorization_letters_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorization_letters_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authorization_letters_products.
     */
    distinct?: Authorization_letters_productsScalarFieldEnum | Authorization_letters_productsScalarFieldEnum[]
  }

  /**
   * authorization_letters_products findMany
   */
  export type authorization_letters_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
    /**
     * Filter, which authorization_letters_products to fetch.
     */
    where?: authorization_letters_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authorization_letters_products to fetch.
     */
    orderBy?: authorization_letters_productsOrderByWithRelationInput | authorization_letters_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authorization_letters_products.
     */
    cursor?: authorization_letters_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authorization_letters_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authorization_letters_products.
     */
    skip?: number
    distinct?: Authorization_letters_productsScalarFieldEnum | Authorization_letters_productsScalarFieldEnum[]
  }

  /**
   * authorization_letters_products create
   */
  export type authorization_letters_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
    /**
     * The data needed to create a authorization_letters_products.
     */
    data: XOR<authorization_letters_productsCreateInput, authorization_letters_productsUncheckedCreateInput>
  }

  /**
   * authorization_letters_products createMany
   */
  export type authorization_letters_productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authorization_letters_products.
     */
    data: authorization_letters_productsCreateManyInput | authorization_letters_productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authorization_letters_products createManyAndReturn
   */
  export type authorization_letters_productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * The data used to create many authorization_letters_products.
     */
    data: authorization_letters_productsCreateManyInput | authorization_letters_productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * authorization_letters_products update
   */
  export type authorization_letters_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
    /**
     * The data needed to update a authorization_letters_products.
     */
    data: XOR<authorization_letters_productsUpdateInput, authorization_letters_productsUncheckedUpdateInput>
    /**
     * Choose, which authorization_letters_products to update.
     */
    where: authorization_letters_productsWhereUniqueInput
  }

  /**
   * authorization_letters_products updateMany
   */
  export type authorization_letters_productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authorization_letters_products.
     */
    data: XOR<authorization_letters_productsUpdateManyMutationInput, authorization_letters_productsUncheckedUpdateManyInput>
    /**
     * Filter which authorization_letters_products to update
     */
    where?: authorization_letters_productsWhereInput
    /**
     * Limit how many authorization_letters_products to update.
     */
    limit?: number
  }

  /**
   * authorization_letters_products updateManyAndReturn
   */
  export type authorization_letters_productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * The data used to update authorization_letters_products.
     */
    data: XOR<authorization_letters_productsUpdateManyMutationInput, authorization_letters_productsUncheckedUpdateManyInput>
    /**
     * Filter which authorization_letters_products to update
     */
    where?: authorization_letters_productsWhereInput
    /**
     * Limit how many authorization_letters_products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * authorization_letters_products upsert
   */
  export type authorization_letters_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
    /**
     * The filter to search for the authorization_letters_products to update in case it exists.
     */
    where: authorization_letters_productsWhereUniqueInput
    /**
     * In case the authorization_letters_products found by the `where` argument doesn't exist, create a new authorization_letters_products with this data.
     */
    create: XOR<authorization_letters_productsCreateInput, authorization_letters_productsUncheckedCreateInput>
    /**
     * In case the authorization_letters_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorization_letters_productsUpdateInput, authorization_letters_productsUncheckedUpdateInput>
  }

  /**
   * authorization_letters_products delete
   */
  export type authorization_letters_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
    /**
     * Filter which authorization_letters_products to delete.
     */
    where: authorization_letters_productsWhereUniqueInput
  }

  /**
   * authorization_letters_products deleteMany
   */
  export type authorization_letters_productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authorization_letters_products to delete
     */
    where?: authorization_letters_productsWhereInput
    /**
     * Limit how many authorization_letters_products to delete.
     */
    limit?: number
  }

  /**
   * authorization_letters_products without action
   */
  export type authorization_letters_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
  }


  /**
   * Model banks
   */

  export type AggregateBanks = {
    _count: BanksCountAggregateOutputType | null
    _avg: BanksAvgAggregateOutputType | null
    _sum: BanksSumAggregateOutputType | null
    _min: BanksMinAggregateOutputType | null
    _max: BanksMaxAggregateOutputType | null
  }

  export type BanksAvgAggregateOutputType = {
    id: number | null
  }

  export type BanksSumAggregateOutputType = {
    id: number | null
  }

  export type BanksMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
  }

  export type BanksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
  }

  export type BanksCountAggregateOutputType = {
    id: number
    name: number
    code: number
    _all: number
  }


  export type BanksAvgAggregateInputType = {
    id?: true
  }

  export type BanksSumAggregateInputType = {
    id?: true
  }

  export type BanksMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type BanksMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type BanksCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    _all?: true
  }

  export type BanksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banks to aggregate.
     */
    where?: banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks to fetch.
     */
    orderBy?: banksOrderByWithRelationInput | banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned banks
    **/
    _count?: true | BanksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BanksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BanksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BanksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BanksMaxAggregateInputType
  }

  export type GetBanksAggregateType<T extends BanksAggregateArgs> = {
        [P in keyof T & keyof AggregateBanks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanks[P]>
      : GetScalarType<T[P], AggregateBanks[P]>
  }




  export type banksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: banksWhereInput
    orderBy?: banksOrderByWithAggregationInput | banksOrderByWithAggregationInput[]
    by: BanksScalarFieldEnum[] | BanksScalarFieldEnum
    having?: banksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BanksCountAggregateInputType | true
    _avg?: BanksAvgAggregateInputType
    _sum?: BanksSumAggregateInputType
    _min?: BanksMinAggregateInputType
    _max?: BanksMaxAggregateInputType
  }

  export type BanksGroupByOutputType = {
    id: number
    name: string
    code: string
    _count: BanksCountAggregateOutputType | null
    _avg: BanksAvgAggregateOutputType | null
    _sum: BanksSumAggregateOutputType | null
    _min: BanksMinAggregateOutputType | null
    _max: BanksMaxAggregateOutputType | null
  }

  type GetBanksGroupByPayload<T extends banksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BanksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BanksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BanksGroupByOutputType[P]>
            : GetScalarType<T[P], BanksGroupByOutputType[P]>
        }
      >
    >


  export type banksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    authorization_letters?: boolean | banks$authorization_lettersArgs<ExtArgs>
    banks_cnabs?: boolean | banks$banks_cnabsArgs<ExtArgs>
    banks_products?: boolean | banks$banks_productsArgs<ExtArgs>
    _count?: boolean | BanksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banks"]>

  export type banksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["banks"]>

  export type banksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["banks"]>

  export type banksSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
  }

  export type banksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code", ExtArgs["result"]["banks"]>
  export type banksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorization_letters?: boolean | banks$authorization_lettersArgs<ExtArgs>
    banks_cnabs?: boolean | banks$banks_cnabsArgs<ExtArgs>
    banks_products?: boolean | banks$banks_productsArgs<ExtArgs>
    _count?: boolean | BanksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type banksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type banksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $banksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "banks"
    objects: {
      authorization_letters: Prisma.$authorization_lettersPayload<ExtArgs>[]
      banks_cnabs: Prisma.$banks_cnabsPayload<ExtArgs>[]
      banks_products: Prisma.$banks_productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
    }, ExtArgs["result"]["banks"]>
    composites: {}
  }

  type banksGetPayload<S extends boolean | null | undefined | banksDefaultArgs> = $Result.GetResult<Prisma.$banksPayload, S>

  type banksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<banksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BanksCountAggregateInputType | true
    }

  export interface banksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['banks'], meta: { name: 'banks' } }
    /**
     * Find zero or one Banks that matches the filter.
     * @param {banksFindUniqueArgs} args - Arguments to find a Banks
     * @example
     * // Get one Banks
     * const banks = await prisma.banks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends banksFindUniqueArgs>(args: SelectSubset<T, banksFindUniqueArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {banksFindUniqueOrThrowArgs} args - Arguments to find a Banks
     * @example
     * // Get one Banks
     * const banks = await prisma.banks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends banksFindUniqueOrThrowArgs>(args: SelectSubset<T, banksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksFindFirstArgs} args - Arguments to find a Banks
     * @example
     * // Get one Banks
     * const banks = await prisma.banks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends banksFindFirstArgs>(args?: SelectSubset<T, banksFindFirstArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksFindFirstOrThrowArgs} args - Arguments to find a Banks
     * @example
     * // Get one Banks
     * const banks = await prisma.banks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends banksFindFirstOrThrowArgs>(args?: SelectSubset<T, banksFindFirstOrThrowArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banks
     * const banks = await prisma.banks.findMany()
     * 
     * // Get first 10 Banks
     * const banks = await prisma.banks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const banksWithIdOnly = await prisma.banks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends banksFindManyArgs>(args?: SelectSubset<T, banksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banks.
     * @param {banksCreateArgs} args - Arguments to create a Banks.
     * @example
     * // Create one Banks
     * const Banks = await prisma.banks.create({
     *   data: {
     *     // ... data to create a Banks
     *   }
     * })
     * 
     */
    create<T extends banksCreateArgs>(args: SelectSubset<T, banksCreateArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banks.
     * @param {banksCreateManyArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const banks = await prisma.banks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends banksCreateManyArgs>(args?: SelectSubset<T, banksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banks and returns the data saved in the database.
     * @param {banksCreateManyAndReturnArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const banks = await prisma.banks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banks and only return the `id`
     * const banksWithIdOnly = await prisma.banks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends banksCreateManyAndReturnArgs>(args?: SelectSubset<T, banksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banks.
     * @param {banksDeleteArgs} args - Arguments to delete one Banks.
     * @example
     * // Delete one Banks
     * const Banks = await prisma.banks.delete({
     *   where: {
     *     // ... filter to delete one Banks
     *   }
     * })
     * 
     */
    delete<T extends banksDeleteArgs>(args: SelectSubset<T, banksDeleteArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banks.
     * @param {banksUpdateArgs} args - Arguments to update one Banks.
     * @example
     * // Update one Banks
     * const banks = await prisma.banks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends banksUpdateArgs>(args: SelectSubset<T, banksUpdateArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banks.
     * @param {banksDeleteManyArgs} args - Arguments to filter Banks to delete.
     * @example
     * // Delete a few Banks
     * const { count } = await prisma.banks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends banksDeleteManyArgs>(args?: SelectSubset<T, banksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banks
     * const banks = await prisma.banks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends banksUpdateManyArgs>(args: SelectSubset<T, banksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks and returns the data updated in the database.
     * @param {banksUpdateManyAndReturnArgs} args - Arguments to update many Banks.
     * @example
     * // Update many Banks
     * const banks = await prisma.banks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banks and only return the `id`
     * const banksWithIdOnly = await prisma.banks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends banksUpdateManyAndReturnArgs>(args: SelectSubset<T, banksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banks.
     * @param {banksUpsertArgs} args - Arguments to update or create a Banks.
     * @example
     * // Update or create a Banks
     * const banks = await prisma.banks.upsert({
     *   create: {
     *     // ... data to create a Banks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banks we want to update
     *   }
     * })
     */
    upsert<T extends banksUpsertArgs>(args: SelectSubset<T, banksUpsertArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksCountArgs} args - Arguments to filter Banks to count.
     * @example
     * // Count the number of Banks
     * const count = await prisma.banks.count({
     *   where: {
     *     // ... the filter for the Banks we want to count
     *   }
     * })
    **/
    count<T extends banksCountArgs>(
      args?: Subset<T, banksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BanksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BanksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BanksAggregateArgs>(args: Subset<T, BanksAggregateArgs>): Prisma.PrismaPromise<GetBanksAggregateType<T>>

    /**
     * Group by Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends banksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: banksGroupByArgs['orderBy'] }
        : { orderBy?: banksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, banksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBanksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the banks model
   */
  readonly fields: banksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for banks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__banksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authorization_letters<T extends banks$authorization_lettersArgs<ExtArgs> = {}>(args?: Subset<T, banks$authorization_lettersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    banks_cnabs<T extends banks$banks_cnabsArgs<ExtArgs> = {}>(args?: Subset<T, banks$banks_cnabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    banks_products<T extends banks$banks_productsArgs<ExtArgs> = {}>(args?: Subset<T, banks$banks_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the banks model
   */
  interface banksFieldRefs {
    readonly id: FieldRef<"banks", 'Int'>
    readonly name: FieldRef<"banks", 'String'>
    readonly code: FieldRef<"banks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * banks findUnique
   */
  export type banksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter, which banks to fetch.
     */
    where: banksWhereUniqueInput
  }

  /**
   * banks findUniqueOrThrow
   */
  export type banksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter, which banks to fetch.
     */
    where: banksWhereUniqueInput
  }

  /**
   * banks findFirst
   */
  export type banksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter, which banks to fetch.
     */
    where?: banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks to fetch.
     */
    orderBy?: banksOrderByWithRelationInput | banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banks.
     */
    cursor?: banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banks.
     */
    distinct?: BanksScalarFieldEnum | BanksScalarFieldEnum[]
  }

  /**
   * banks findFirstOrThrow
   */
  export type banksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter, which banks to fetch.
     */
    where?: banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks to fetch.
     */
    orderBy?: banksOrderByWithRelationInput | banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banks.
     */
    cursor?: banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banks.
     */
    distinct?: BanksScalarFieldEnum | BanksScalarFieldEnum[]
  }

  /**
   * banks findMany
   */
  export type banksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter, which banks to fetch.
     */
    where?: banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks to fetch.
     */
    orderBy?: banksOrderByWithRelationInput | banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing banks.
     */
    cursor?: banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks.
     */
    skip?: number
    distinct?: BanksScalarFieldEnum | BanksScalarFieldEnum[]
  }

  /**
   * banks create
   */
  export type banksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * The data needed to create a banks.
     */
    data: XOR<banksCreateInput, banksUncheckedCreateInput>
  }

  /**
   * banks createMany
   */
  export type banksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many banks.
     */
    data: banksCreateManyInput | banksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * banks createManyAndReturn
   */
  export type banksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * The data used to create many banks.
     */
    data: banksCreateManyInput | banksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * banks update
   */
  export type banksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * The data needed to update a banks.
     */
    data: XOR<banksUpdateInput, banksUncheckedUpdateInput>
    /**
     * Choose, which banks to update.
     */
    where: banksWhereUniqueInput
  }

  /**
   * banks updateMany
   */
  export type banksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update banks.
     */
    data: XOR<banksUpdateManyMutationInput, banksUncheckedUpdateManyInput>
    /**
     * Filter which banks to update
     */
    where?: banksWhereInput
    /**
     * Limit how many banks to update.
     */
    limit?: number
  }

  /**
   * banks updateManyAndReturn
   */
  export type banksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * The data used to update banks.
     */
    data: XOR<banksUpdateManyMutationInput, banksUncheckedUpdateManyInput>
    /**
     * Filter which banks to update
     */
    where?: banksWhereInput
    /**
     * Limit how many banks to update.
     */
    limit?: number
  }

  /**
   * banks upsert
   */
  export type banksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * The filter to search for the banks to update in case it exists.
     */
    where: banksWhereUniqueInput
    /**
     * In case the banks found by the `where` argument doesn't exist, create a new banks with this data.
     */
    create: XOR<banksCreateInput, banksUncheckedCreateInput>
    /**
     * In case the banks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<banksUpdateInput, banksUncheckedUpdateInput>
  }

  /**
   * banks delete
   */
  export type banksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter which banks to delete.
     */
    where: banksWhereUniqueInput
  }

  /**
   * banks deleteMany
   */
  export type banksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banks to delete
     */
    where?: banksWhereInput
    /**
     * Limit how many banks to delete.
     */
    limit?: number
  }

  /**
   * banks.authorization_letters
   */
  export type banks$authorization_lettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
    where?: authorization_lettersWhereInput
    orderBy?: authorization_lettersOrderByWithRelationInput | authorization_lettersOrderByWithRelationInput[]
    cursor?: authorization_lettersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Authorization_lettersScalarFieldEnum | Authorization_lettersScalarFieldEnum[]
  }

  /**
   * banks.banks_cnabs
   */
  export type banks$banks_cnabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
    where?: banks_cnabsWhereInput
    orderBy?: banks_cnabsOrderByWithRelationInput | banks_cnabsOrderByWithRelationInput[]
    cursor?: banks_cnabsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Banks_cnabsScalarFieldEnum | Banks_cnabsScalarFieldEnum[]
  }

  /**
   * banks.banks_products
   */
  export type banks$banks_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
    where?: banks_productsWhereInput
    orderBy?: banks_productsOrderByWithRelationInput | banks_productsOrderByWithRelationInput[]
    cursor?: banks_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Banks_productsScalarFieldEnum | Banks_productsScalarFieldEnum[]
  }

  /**
   * banks without action
   */
  export type banksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
  }


  /**
   * Model banks_cnabs
   */

  export type AggregateBanks_cnabs = {
    _count: Banks_cnabsCountAggregateOutputType | null
    _avg: Banks_cnabsAvgAggregateOutputType | null
    _sum: Banks_cnabsSumAggregateOutputType | null
    _min: Banks_cnabsMinAggregateOutputType | null
    _max: Banks_cnabsMaxAggregateOutputType | null
  }

  export type Banks_cnabsAvgAggregateOutputType = {
    id: number | null
    id_banks: number | null
    id_cnabs: number | null
  }

  export type Banks_cnabsSumAggregateOutputType = {
    id: bigint | null
    id_banks: number | null
    id_cnabs: number | null
  }

  export type Banks_cnabsMinAggregateOutputType = {
    id: bigint | null
    id_banks: number | null
    id_cnabs: number | null
  }

  export type Banks_cnabsMaxAggregateOutputType = {
    id: bigint | null
    id_banks: number | null
    id_cnabs: number | null
  }

  export type Banks_cnabsCountAggregateOutputType = {
    id: number
    id_banks: number
    id_cnabs: number
    _all: number
  }


  export type Banks_cnabsAvgAggregateInputType = {
    id?: true
    id_banks?: true
    id_cnabs?: true
  }

  export type Banks_cnabsSumAggregateInputType = {
    id?: true
    id_banks?: true
    id_cnabs?: true
  }

  export type Banks_cnabsMinAggregateInputType = {
    id?: true
    id_banks?: true
    id_cnabs?: true
  }

  export type Banks_cnabsMaxAggregateInputType = {
    id?: true
    id_banks?: true
    id_cnabs?: true
  }

  export type Banks_cnabsCountAggregateInputType = {
    id?: true
    id_banks?: true
    id_cnabs?: true
    _all?: true
  }

  export type Banks_cnabsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banks_cnabs to aggregate.
     */
    where?: banks_cnabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks_cnabs to fetch.
     */
    orderBy?: banks_cnabsOrderByWithRelationInput | banks_cnabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: banks_cnabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks_cnabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks_cnabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned banks_cnabs
    **/
    _count?: true | Banks_cnabsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Banks_cnabsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Banks_cnabsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Banks_cnabsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Banks_cnabsMaxAggregateInputType
  }

  export type GetBanks_cnabsAggregateType<T extends Banks_cnabsAggregateArgs> = {
        [P in keyof T & keyof AggregateBanks_cnabs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanks_cnabs[P]>
      : GetScalarType<T[P], AggregateBanks_cnabs[P]>
  }




  export type banks_cnabsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: banks_cnabsWhereInput
    orderBy?: banks_cnabsOrderByWithAggregationInput | banks_cnabsOrderByWithAggregationInput[]
    by: Banks_cnabsScalarFieldEnum[] | Banks_cnabsScalarFieldEnum
    having?: banks_cnabsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Banks_cnabsCountAggregateInputType | true
    _avg?: Banks_cnabsAvgAggregateInputType
    _sum?: Banks_cnabsSumAggregateInputType
    _min?: Banks_cnabsMinAggregateInputType
    _max?: Banks_cnabsMaxAggregateInputType
  }

  export type Banks_cnabsGroupByOutputType = {
    id: bigint
    id_banks: number
    id_cnabs: number
    _count: Banks_cnabsCountAggregateOutputType | null
    _avg: Banks_cnabsAvgAggregateOutputType | null
    _sum: Banks_cnabsSumAggregateOutputType | null
    _min: Banks_cnabsMinAggregateOutputType | null
    _max: Banks_cnabsMaxAggregateOutputType | null
  }

  type GetBanks_cnabsGroupByPayload<T extends banks_cnabsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Banks_cnabsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Banks_cnabsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Banks_cnabsGroupByOutputType[P]>
            : GetScalarType<T[P], Banks_cnabsGroupByOutputType[P]>
        }
      >
    >


  export type banks_cnabsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_banks?: boolean
    id_cnabs?: boolean
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banks_cnabs"]>

  export type banks_cnabsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_banks?: boolean
    id_cnabs?: boolean
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banks_cnabs"]>

  export type banks_cnabsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_banks?: boolean
    id_cnabs?: boolean
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banks_cnabs"]>

  export type banks_cnabsSelectScalar = {
    id?: boolean
    id_banks?: boolean
    id_cnabs?: boolean
  }

  export type banks_cnabsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_banks" | "id_cnabs", ExtArgs["result"]["banks_cnabs"]>
  export type banks_cnabsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
  }
  export type banks_cnabsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
  }
  export type banks_cnabsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banks?: boolean | banksDefaultArgs<ExtArgs>
    cnabs?: boolean | cnabsDefaultArgs<ExtArgs>
  }

  export type $banks_cnabsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "banks_cnabs"
    objects: {
      banks: Prisma.$banksPayload<ExtArgs>
      cnabs: Prisma.$cnabsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_banks: number
      id_cnabs: number
    }, ExtArgs["result"]["banks_cnabs"]>
    composites: {}
  }

  type banks_cnabsGetPayload<S extends boolean | null | undefined | banks_cnabsDefaultArgs> = $Result.GetResult<Prisma.$banks_cnabsPayload, S>

  type banks_cnabsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<banks_cnabsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Banks_cnabsCountAggregateInputType | true
    }

  export interface banks_cnabsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['banks_cnabs'], meta: { name: 'banks_cnabs' } }
    /**
     * Find zero or one Banks_cnabs that matches the filter.
     * @param {banks_cnabsFindUniqueArgs} args - Arguments to find a Banks_cnabs
     * @example
     * // Get one Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends banks_cnabsFindUniqueArgs>(args: SelectSubset<T, banks_cnabsFindUniqueArgs<ExtArgs>>): Prisma__banks_cnabsClient<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banks_cnabs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {banks_cnabsFindUniqueOrThrowArgs} args - Arguments to find a Banks_cnabs
     * @example
     * // Get one Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends banks_cnabsFindUniqueOrThrowArgs>(args: SelectSubset<T, banks_cnabsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__banks_cnabsClient<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banks_cnabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_cnabsFindFirstArgs} args - Arguments to find a Banks_cnabs
     * @example
     * // Get one Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends banks_cnabsFindFirstArgs>(args?: SelectSubset<T, banks_cnabsFindFirstArgs<ExtArgs>>): Prisma__banks_cnabsClient<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banks_cnabs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_cnabsFindFirstOrThrowArgs} args - Arguments to find a Banks_cnabs
     * @example
     * // Get one Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends banks_cnabsFindFirstOrThrowArgs>(args?: SelectSubset<T, banks_cnabsFindFirstOrThrowArgs<ExtArgs>>): Prisma__banks_cnabsClient<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banks_cnabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_cnabsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.findMany()
     * 
     * // Get first 10 Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const banks_cnabsWithIdOnly = await prisma.banks_cnabs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends banks_cnabsFindManyArgs>(args?: SelectSubset<T, banks_cnabsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banks_cnabs.
     * @param {banks_cnabsCreateArgs} args - Arguments to create a Banks_cnabs.
     * @example
     * // Create one Banks_cnabs
     * const Banks_cnabs = await prisma.banks_cnabs.create({
     *   data: {
     *     // ... data to create a Banks_cnabs
     *   }
     * })
     * 
     */
    create<T extends banks_cnabsCreateArgs>(args: SelectSubset<T, banks_cnabsCreateArgs<ExtArgs>>): Prisma__banks_cnabsClient<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banks_cnabs.
     * @param {banks_cnabsCreateManyArgs} args - Arguments to create many Banks_cnabs.
     * @example
     * // Create many Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends banks_cnabsCreateManyArgs>(args?: SelectSubset<T, banks_cnabsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banks_cnabs and returns the data saved in the database.
     * @param {banks_cnabsCreateManyAndReturnArgs} args - Arguments to create many Banks_cnabs.
     * @example
     * // Create many Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banks_cnabs and only return the `id`
     * const banks_cnabsWithIdOnly = await prisma.banks_cnabs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends banks_cnabsCreateManyAndReturnArgs>(args?: SelectSubset<T, banks_cnabsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banks_cnabs.
     * @param {banks_cnabsDeleteArgs} args - Arguments to delete one Banks_cnabs.
     * @example
     * // Delete one Banks_cnabs
     * const Banks_cnabs = await prisma.banks_cnabs.delete({
     *   where: {
     *     // ... filter to delete one Banks_cnabs
     *   }
     * })
     * 
     */
    delete<T extends banks_cnabsDeleteArgs>(args: SelectSubset<T, banks_cnabsDeleteArgs<ExtArgs>>): Prisma__banks_cnabsClient<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banks_cnabs.
     * @param {banks_cnabsUpdateArgs} args - Arguments to update one Banks_cnabs.
     * @example
     * // Update one Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends banks_cnabsUpdateArgs>(args: SelectSubset<T, banks_cnabsUpdateArgs<ExtArgs>>): Prisma__banks_cnabsClient<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banks_cnabs.
     * @param {banks_cnabsDeleteManyArgs} args - Arguments to filter Banks_cnabs to delete.
     * @example
     * // Delete a few Banks_cnabs
     * const { count } = await prisma.banks_cnabs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends banks_cnabsDeleteManyArgs>(args?: SelectSubset<T, banks_cnabsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks_cnabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_cnabsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends banks_cnabsUpdateManyArgs>(args: SelectSubset<T, banks_cnabsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks_cnabs and returns the data updated in the database.
     * @param {banks_cnabsUpdateManyAndReturnArgs} args - Arguments to update many Banks_cnabs.
     * @example
     * // Update many Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banks_cnabs and only return the `id`
     * const banks_cnabsWithIdOnly = await prisma.banks_cnabs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends banks_cnabsUpdateManyAndReturnArgs>(args: SelectSubset<T, banks_cnabsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banks_cnabs.
     * @param {banks_cnabsUpsertArgs} args - Arguments to update or create a Banks_cnabs.
     * @example
     * // Update or create a Banks_cnabs
     * const banks_cnabs = await prisma.banks_cnabs.upsert({
     *   create: {
     *     // ... data to create a Banks_cnabs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banks_cnabs we want to update
     *   }
     * })
     */
    upsert<T extends banks_cnabsUpsertArgs>(args: SelectSubset<T, banks_cnabsUpsertArgs<ExtArgs>>): Prisma__banks_cnabsClient<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banks_cnabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_cnabsCountArgs} args - Arguments to filter Banks_cnabs to count.
     * @example
     * // Count the number of Banks_cnabs
     * const count = await prisma.banks_cnabs.count({
     *   where: {
     *     // ... the filter for the Banks_cnabs we want to count
     *   }
     * })
    **/
    count<T extends banks_cnabsCountArgs>(
      args?: Subset<T, banks_cnabsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Banks_cnabsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banks_cnabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Banks_cnabsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Banks_cnabsAggregateArgs>(args: Subset<T, Banks_cnabsAggregateArgs>): Prisma.PrismaPromise<GetBanks_cnabsAggregateType<T>>

    /**
     * Group by Banks_cnabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_cnabsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends banks_cnabsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: banks_cnabsGroupByArgs['orderBy'] }
        : { orderBy?: banks_cnabsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, banks_cnabsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBanks_cnabsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the banks_cnabs model
   */
  readonly fields: banks_cnabsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for banks_cnabs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__banks_cnabsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    banks<T extends banksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, banksDefaultArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cnabs<T extends cnabsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cnabsDefaultArgs<ExtArgs>>): Prisma__cnabsClient<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the banks_cnabs model
   */
  interface banks_cnabsFieldRefs {
    readonly id: FieldRef<"banks_cnabs", 'BigInt'>
    readonly id_banks: FieldRef<"banks_cnabs", 'Int'>
    readonly id_cnabs: FieldRef<"banks_cnabs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * banks_cnabs findUnique
   */
  export type banks_cnabsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
    /**
     * Filter, which banks_cnabs to fetch.
     */
    where: banks_cnabsWhereUniqueInput
  }

  /**
   * banks_cnabs findUniqueOrThrow
   */
  export type banks_cnabsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
    /**
     * Filter, which banks_cnabs to fetch.
     */
    where: banks_cnabsWhereUniqueInput
  }

  /**
   * banks_cnabs findFirst
   */
  export type banks_cnabsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
    /**
     * Filter, which banks_cnabs to fetch.
     */
    where?: banks_cnabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks_cnabs to fetch.
     */
    orderBy?: banks_cnabsOrderByWithRelationInput | banks_cnabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banks_cnabs.
     */
    cursor?: banks_cnabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks_cnabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks_cnabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banks_cnabs.
     */
    distinct?: Banks_cnabsScalarFieldEnum | Banks_cnabsScalarFieldEnum[]
  }

  /**
   * banks_cnabs findFirstOrThrow
   */
  export type banks_cnabsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
    /**
     * Filter, which banks_cnabs to fetch.
     */
    where?: banks_cnabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks_cnabs to fetch.
     */
    orderBy?: banks_cnabsOrderByWithRelationInput | banks_cnabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banks_cnabs.
     */
    cursor?: banks_cnabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks_cnabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks_cnabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banks_cnabs.
     */
    distinct?: Banks_cnabsScalarFieldEnum | Banks_cnabsScalarFieldEnum[]
  }

  /**
   * banks_cnabs findMany
   */
  export type banks_cnabsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
    /**
     * Filter, which banks_cnabs to fetch.
     */
    where?: banks_cnabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks_cnabs to fetch.
     */
    orderBy?: banks_cnabsOrderByWithRelationInput | banks_cnabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing banks_cnabs.
     */
    cursor?: banks_cnabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks_cnabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks_cnabs.
     */
    skip?: number
    distinct?: Banks_cnabsScalarFieldEnum | Banks_cnabsScalarFieldEnum[]
  }

  /**
   * banks_cnabs create
   */
  export type banks_cnabsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
    /**
     * The data needed to create a banks_cnabs.
     */
    data: XOR<banks_cnabsCreateInput, banks_cnabsUncheckedCreateInput>
  }

  /**
   * banks_cnabs createMany
   */
  export type banks_cnabsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many banks_cnabs.
     */
    data: banks_cnabsCreateManyInput | banks_cnabsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * banks_cnabs createManyAndReturn
   */
  export type banks_cnabsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * The data used to create many banks_cnabs.
     */
    data: banks_cnabsCreateManyInput | banks_cnabsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * banks_cnabs update
   */
  export type banks_cnabsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
    /**
     * The data needed to update a banks_cnabs.
     */
    data: XOR<banks_cnabsUpdateInput, banks_cnabsUncheckedUpdateInput>
    /**
     * Choose, which banks_cnabs to update.
     */
    where: banks_cnabsWhereUniqueInput
  }

  /**
   * banks_cnabs updateMany
   */
  export type banks_cnabsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update banks_cnabs.
     */
    data: XOR<banks_cnabsUpdateManyMutationInput, banks_cnabsUncheckedUpdateManyInput>
    /**
     * Filter which banks_cnabs to update
     */
    where?: banks_cnabsWhereInput
    /**
     * Limit how many banks_cnabs to update.
     */
    limit?: number
  }

  /**
   * banks_cnabs updateManyAndReturn
   */
  export type banks_cnabsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * The data used to update banks_cnabs.
     */
    data: XOR<banks_cnabsUpdateManyMutationInput, banks_cnabsUncheckedUpdateManyInput>
    /**
     * Filter which banks_cnabs to update
     */
    where?: banks_cnabsWhereInput
    /**
     * Limit how many banks_cnabs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * banks_cnabs upsert
   */
  export type banks_cnabsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
    /**
     * The filter to search for the banks_cnabs to update in case it exists.
     */
    where: banks_cnabsWhereUniqueInput
    /**
     * In case the banks_cnabs found by the `where` argument doesn't exist, create a new banks_cnabs with this data.
     */
    create: XOR<banks_cnabsCreateInput, banks_cnabsUncheckedCreateInput>
    /**
     * In case the banks_cnabs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<banks_cnabsUpdateInput, banks_cnabsUncheckedUpdateInput>
  }

  /**
   * banks_cnabs delete
   */
  export type banks_cnabsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
    /**
     * Filter which banks_cnabs to delete.
     */
    where: banks_cnabsWhereUniqueInput
  }

  /**
   * banks_cnabs deleteMany
   */
  export type banks_cnabsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banks_cnabs to delete
     */
    where?: banks_cnabsWhereInput
    /**
     * Limit how many banks_cnabs to delete.
     */
    limit?: number
  }

  /**
   * banks_cnabs without action
   */
  export type banks_cnabsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
  }


  /**
   * Model banks_products
   */

  export type AggregateBanks_products = {
    _count: Banks_productsCountAggregateOutputType | null
    _avg: Banks_productsAvgAggregateOutputType | null
    _sum: Banks_productsSumAggregateOutputType | null
    _min: Banks_productsMinAggregateOutputType | null
    _max: Banks_productsMaxAggregateOutputType | null
  }

  export type Banks_productsAvgAggregateOutputType = {
    id: number | null
    id_products: number | null
    id_banks: number | null
  }

  export type Banks_productsSumAggregateOutputType = {
    id: bigint | null
    id_products: bigint | null
    id_banks: number | null
  }

  export type Banks_productsMinAggregateOutputType = {
    id: bigint | null
    id_products: bigint | null
    id_banks: number | null
  }

  export type Banks_productsMaxAggregateOutputType = {
    id: bigint | null
    id_products: bigint | null
    id_banks: number | null
  }

  export type Banks_productsCountAggregateOutputType = {
    id: number
    id_products: number
    id_banks: number
    _all: number
  }


  export type Banks_productsAvgAggregateInputType = {
    id?: true
    id_products?: true
    id_banks?: true
  }

  export type Banks_productsSumAggregateInputType = {
    id?: true
    id_products?: true
    id_banks?: true
  }

  export type Banks_productsMinAggregateInputType = {
    id?: true
    id_products?: true
    id_banks?: true
  }

  export type Banks_productsMaxAggregateInputType = {
    id?: true
    id_products?: true
    id_banks?: true
  }

  export type Banks_productsCountAggregateInputType = {
    id?: true
    id_products?: true
    id_banks?: true
    _all?: true
  }

  export type Banks_productsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banks_products to aggregate.
     */
    where?: banks_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks_products to fetch.
     */
    orderBy?: banks_productsOrderByWithRelationInput | banks_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: banks_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned banks_products
    **/
    _count?: true | Banks_productsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Banks_productsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Banks_productsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Banks_productsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Banks_productsMaxAggregateInputType
  }

  export type GetBanks_productsAggregateType<T extends Banks_productsAggregateArgs> = {
        [P in keyof T & keyof AggregateBanks_products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanks_products[P]>
      : GetScalarType<T[P], AggregateBanks_products[P]>
  }




  export type banks_productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: banks_productsWhereInput
    orderBy?: banks_productsOrderByWithAggregationInput | banks_productsOrderByWithAggregationInput[]
    by: Banks_productsScalarFieldEnum[] | Banks_productsScalarFieldEnum
    having?: banks_productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Banks_productsCountAggregateInputType | true
    _avg?: Banks_productsAvgAggregateInputType
    _sum?: Banks_productsSumAggregateInputType
    _min?: Banks_productsMinAggregateInputType
    _max?: Banks_productsMaxAggregateInputType
  }

  export type Banks_productsGroupByOutputType = {
    id: bigint
    id_products: bigint
    id_banks: number
    _count: Banks_productsCountAggregateOutputType | null
    _avg: Banks_productsAvgAggregateOutputType | null
    _sum: Banks_productsSumAggregateOutputType | null
    _min: Banks_productsMinAggregateOutputType | null
    _max: Banks_productsMaxAggregateOutputType | null
  }

  type GetBanks_productsGroupByPayload<T extends banks_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Banks_productsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Banks_productsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Banks_productsGroupByOutputType[P]>
            : GetScalarType<T[P], Banks_productsGroupByOutputType[P]>
        }
      >
    >


  export type banks_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_products?: boolean
    id_banks?: boolean
    banks?: boolean | banksDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banks_products"]>

  export type banks_productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_products?: boolean
    id_banks?: boolean
    banks?: boolean | banksDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banks_products"]>

  export type banks_productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_products?: boolean
    id_banks?: boolean
    banks?: boolean | banksDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banks_products"]>

  export type banks_productsSelectScalar = {
    id?: boolean
    id_products?: boolean
    id_banks?: boolean
  }

  export type banks_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_products" | "id_banks", ExtArgs["result"]["banks_products"]>
  export type banks_productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banks?: boolean | banksDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type banks_productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banks?: boolean | banksDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type banks_productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banks?: boolean | banksDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $banks_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "banks_products"
    objects: {
      banks: Prisma.$banksPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_products: bigint
      id_banks: number
    }, ExtArgs["result"]["banks_products"]>
    composites: {}
  }

  type banks_productsGetPayload<S extends boolean | null | undefined | banks_productsDefaultArgs> = $Result.GetResult<Prisma.$banks_productsPayload, S>

  type banks_productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<banks_productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Banks_productsCountAggregateInputType | true
    }

  export interface banks_productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['banks_products'], meta: { name: 'banks_products' } }
    /**
     * Find zero or one Banks_products that matches the filter.
     * @param {banks_productsFindUniqueArgs} args - Arguments to find a Banks_products
     * @example
     * // Get one Banks_products
     * const banks_products = await prisma.banks_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends banks_productsFindUniqueArgs>(args: SelectSubset<T, banks_productsFindUniqueArgs<ExtArgs>>): Prisma__banks_productsClient<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banks_products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {banks_productsFindUniqueOrThrowArgs} args - Arguments to find a Banks_products
     * @example
     * // Get one Banks_products
     * const banks_products = await prisma.banks_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends banks_productsFindUniqueOrThrowArgs>(args: SelectSubset<T, banks_productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__banks_productsClient<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banks_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_productsFindFirstArgs} args - Arguments to find a Banks_products
     * @example
     * // Get one Banks_products
     * const banks_products = await prisma.banks_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends banks_productsFindFirstArgs>(args?: SelectSubset<T, banks_productsFindFirstArgs<ExtArgs>>): Prisma__banks_productsClient<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banks_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_productsFindFirstOrThrowArgs} args - Arguments to find a Banks_products
     * @example
     * // Get one Banks_products
     * const banks_products = await prisma.banks_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends banks_productsFindFirstOrThrowArgs>(args?: SelectSubset<T, banks_productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__banks_productsClient<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banks_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banks_products
     * const banks_products = await prisma.banks_products.findMany()
     * 
     * // Get first 10 Banks_products
     * const banks_products = await prisma.banks_products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const banks_productsWithIdOnly = await prisma.banks_products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends banks_productsFindManyArgs>(args?: SelectSubset<T, banks_productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banks_products.
     * @param {banks_productsCreateArgs} args - Arguments to create a Banks_products.
     * @example
     * // Create one Banks_products
     * const Banks_products = await prisma.banks_products.create({
     *   data: {
     *     // ... data to create a Banks_products
     *   }
     * })
     * 
     */
    create<T extends banks_productsCreateArgs>(args: SelectSubset<T, banks_productsCreateArgs<ExtArgs>>): Prisma__banks_productsClient<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banks_products.
     * @param {banks_productsCreateManyArgs} args - Arguments to create many Banks_products.
     * @example
     * // Create many Banks_products
     * const banks_products = await prisma.banks_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends banks_productsCreateManyArgs>(args?: SelectSubset<T, banks_productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banks_products and returns the data saved in the database.
     * @param {banks_productsCreateManyAndReturnArgs} args - Arguments to create many Banks_products.
     * @example
     * // Create many Banks_products
     * const banks_products = await prisma.banks_products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banks_products and only return the `id`
     * const banks_productsWithIdOnly = await prisma.banks_products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends banks_productsCreateManyAndReturnArgs>(args?: SelectSubset<T, banks_productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banks_products.
     * @param {banks_productsDeleteArgs} args - Arguments to delete one Banks_products.
     * @example
     * // Delete one Banks_products
     * const Banks_products = await prisma.banks_products.delete({
     *   where: {
     *     // ... filter to delete one Banks_products
     *   }
     * })
     * 
     */
    delete<T extends banks_productsDeleteArgs>(args: SelectSubset<T, banks_productsDeleteArgs<ExtArgs>>): Prisma__banks_productsClient<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banks_products.
     * @param {banks_productsUpdateArgs} args - Arguments to update one Banks_products.
     * @example
     * // Update one Banks_products
     * const banks_products = await prisma.banks_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends banks_productsUpdateArgs>(args: SelectSubset<T, banks_productsUpdateArgs<ExtArgs>>): Prisma__banks_productsClient<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banks_products.
     * @param {banks_productsDeleteManyArgs} args - Arguments to filter Banks_products to delete.
     * @example
     * // Delete a few Banks_products
     * const { count } = await prisma.banks_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends banks_productsDeleteManyArgs>(args?: SelectSubset<T, banks_productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banks_products
     * const banks_products = await prisma.banks_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends banks_productsUpdateManyArgs>(args: SelectSubset<T, banks_productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks_products and returns the data updated in the database.
     * @param {banks_productsUpdateManyAndReturnArgs} args - Arguments to update many Banks_products.
     * @example
     * // Update many Banks_products
     * const banks_products = await prisma.banks_products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banks_products and only return the `id`
     * const banks_productsWithIdOnly = await prisma.banks_products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends banks_productsUpdateManyAndReturnArgs>(args: SelectSubset<T, banks_productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banks_products.
     * @param {banks_productsUpsertArgs} args - Arguments to update or create a Banks_products.
     * @example
     * // Update or create a Banks_products
     * const banks_products = await prisma.banks_products.upsert({
     *   create: {
     *     // ... data to create a Banks_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banks_products we want to update
     *   }
     * })
     */
    upsert<T extends banks_productsUpsertArgs>(args: SelectSubset<T, banks_productsUpsertArgs<ExtArgs>>): Prisma__banks_productsClient<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banks_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_productsCountArgs} args - Arguments to filter Banks_products to count.
     * @example
     * // Count the number of Banks_products
     * const count = await prisma.banks_products.count({
     *   where: {
     *     // ... the filter for the Banks_products we want to count
     *   }
     * })
    **/
    count<T extends banks_productsCountArgs>(
      args?: Subset<T, banks_productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Banks_productsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banks_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Banks_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Banks_productsAggregateArgs>(args: Subset<T, Banks_productsAggregateArgs>): Prisma.PrismaPromise<GetBanks_productsAggregateType<T>>

    /**
     * Group by Banks_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banks_productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends banks_productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: banks_productsGroupByArgs['orderBy'] }
        : { orderBy?: banks_productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, banks_productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBanks_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the banks_products model
   */
  readonly fields: banks_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for banks_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__banks_productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    banks<T extends banksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, banksDefaultArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the banks_products model
   */
  interface banks_productsFieldRefs {
    readonly id: FieldRef<"banks_products", 'BigInt'>
    readonly id_products: FieldRef<"banks_products", 'BigInt'>
    readonly id_banks: FieldRef<"banks_products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * banks_products findUnique
   */
  export type banks_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
    /**
     * Filter, which banks_products to fetch.
     */
    where: banks_productsWhereUniqueInput
  }

  /**
   * banks_products findUniqueOrThrow
   */
  export type banks_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
    /**
     * Filter, which banks_products to fetch.
     */
    where: banks_productsWhereUniqueInput
  }

  /**
   * banks_products findFirst
   */
  export type banks_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
    /**
     * Filter, which banks_products to fetch.
     */
    where?: banks_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks_products to fetch.
     */
    orderBy?: banks_productsOrderByWithRelationInput | banks_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banks_products.
     */
    cursor?: banks_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banks_products.
     */
    distinct?: Banks_productsScalarFieldEnum | Banks_productsScalarFieldEnum[]
  }

  /**
   * banks_products findFirstOrThrow
   */
  export type banks_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
    /**
     * Filter, which banks_products to fetch.
     */
    where?: banks_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks_products to fetch.
     */
    orderBy?: banks_productsOrderByWithRelationInput | banks_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banks_products.
     */
    cursor?: banks_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banks_products.
     */
    distinct?: Banks_productsScalarFieldEnum | Banks_productsScalarFieldEnum[]
  }

  /**
   * banks_products findMany
   */
  export type banks_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
    /**
     * Filter, which banks_products to fetch.
     */
    where?: banks_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks_products to fetch.
     */
    orderBy?: banks_productsOrderByWithRelationInput | banks_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing banks_products.
     */
    cursor?: banks_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks_products.
     */
    skip?: number
    distinct?: Banks_productsScalarFieldEnum | Banks_productsScalarFieldEnum[]
  }

  /**
   * banks_products create
   */
  export type banks_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
    /**
     * The data needed to create a banks_products.
     */
    data: XOR<banks_productsCreateInput, banks_productsUncheckedCreateInput>
  }

  /**
   * banks_products createMany
   */
  export type banks_productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many banks_products.
     */
    data: banks_productsCreateManyInput | banks_productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * banks_products createManyAndReturn
   */
  export type banks_productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * The data used to create many banks_products.
     */
    data: banks_productsCreateManyInput | banks_productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * banks_products update
   */
  export type banks_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
    /**
     * The data needed to update a banks_products.
     */
    data: XOR<banks_productsUpdateInput, banks_productsUncheckedUpdateInput>
    /**
     * Choose, which banks_products to update.
     */
    where: banks_productsWhereUniqueInput
  }

  /**
   * banks_products updateMany
   */
  export type banks_productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update banks_products.
     */
    data: XOR<banks_productsUpdateManyMutationInput, banks_productsUncheckedUpdateManyInput>
    /**
     * Filter which banks_products to update
     */
    where?: banks_productsWhereInput
    /**
     * Limit how many banks_products to update.
     */
    limit?: number
  }

  /**
   * banks_products updateManyAndReturn
   */
  export type banks_productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * The data used to update banks_products.
     */
    data: XOR<banks_productsUpdateManyMutationInput, banks_productsUncheckedUpdateManyInput>
    /**
     * Filter which banks_products to update
     */
    where?: banks_productsWhereInput
    /**
     * Limit how many banks_products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * banks_products upsert
   */
  export type banks_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
    /**
     * The filter to search for the banks_products to update in case it exists.
     */
    where: banks_productsWhereUniqueInput
    /**
     * In case the banks_products found by the `where` argument doesn't exist, create a new banks_products with this data.
     */
    create: XOR<banks_productsCreateInput, banks_productsUncheckedCreateInput>
    /**
     * In case the banks_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<banks_productsUpdateInput, banks_productsUncheckedUpdateInput>
  }

  /**
   * banks_products delete
   */
  export type banks_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
    /**
     * Filter which banks_products to delete.
     */
    where: banks_productsWhereUniqueInput
  }

  /**
   * banks_products deleteMany
   */
  export type banks_productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banks_products to delete
     */
    where?: banks_productsWhereInput
    /**
     * Limit how many banks_products to delete.
     */
    limit?: number
  }

  /**
   * banks_products without action
   */
  export type banks_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
  }


  /**
   * Model cnabs
   */

  export type AggregateCnabs = {
    _count: CnabsCountAggregateOutputType | null
    _avg: CnabsAvgAggregateOutputType | null
    _sum: CnabsSumAggregateOutputType | null
    _min: CnabsMinAggregateOutputType | null
    _max: CnabsMaxAggregateOutputType | null
  }

  export type CnabsAvgAggregateOutputType = {
    id: number | null
  }

  export type CnabsSumAggregateOutputType = {
    id: number | null
  }

  export type CnabsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CnabsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CnabsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CnabsAvgAggregateInputType = {
    id?: true
  }

  export type CnabsSumAggregateInputType = {
    id?: true
  }

  export type CnabsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CnabsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CnabsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CnabsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cnabs to aggregate.
     */
    where?: cnabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnabs to fetch.
     */
    orderBy?: cnabsOrderByWithRelationInput | cnabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cnabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cnabs
    **/
    _count?: true | CnabsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CnabsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CnabsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CnabsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CnabsMaxAggregateInputType
  }

  export type GetCnabsAggregateType<T extends CnabsAggregateArgs> = {
        [P in keyof T & keyof AggregateCnabs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCnabs[P]>
      : GetScalarType<T[P], AggregateCnabs[P]>
  }




  export type cnabsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cnabsWhereInput
    orderBy?: cnabsOrderByWithAggregationInput | cnabsOrderByWithAggregationInput[]
    by: CnabsScalarFieldEnum[] | CnabsScalarFieldEnum
    having?: cnabsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CnabsCountAggregateInputType | true
    _avg?: CnabsAvgAggregateInputType
    _sum?: CnabsSumAggregateInputType
    _min?: CnabsMinAggregateInputType
    _max?: CnabsMaxAggregateInputType
  }

  export type CnabsGroupByOutputType = {
    id: number
    name: string
    _count: CnabsCountAggregateOutputType | null
    _avg: CnabsAvgAggregateOutputType | null
    _sum: CnabsSumAggregateOutputType | null
    _min: CnabsMinAggregateOutputType | null
    _max: CnabsMaxAggregateOutputType | null
  }

  type GetCnabsGroupByPayload<T extends cnabsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CnabsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CnabsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CnabsGroupByOutputType[P]>
            : GetScalarType<T[P], CnabsGroupByOutputType[P]>
        }
      >
    >


  export type cnabsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    authorization_letters?: boolean | cnabs$authorization_lettersArgs<ExtArgs>
    banks_cnabs?: boolean | cnabs$banks_cnabsArgs<ExtArgs>
    _count?: boolean | CnabsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cnabs"]>

  export type cnabsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["cnabs"]>

  export type cnabsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["cnabs"]>

  export type cnabsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type cnabsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["cnabs"]>
  export type cnabsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorization_letters?: boolean | cnabs$authorization_lettersArgs<ExtArgs>
    banks_cnabs?: boolean | cnabs$banks_cnabsArgs<ExtArgs>
    _count?: boolean | CnabsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cnabsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cnabsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cnabsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cnabs"
    objects: {
      authorization_letters: Prisma.$authorization_lettersPayload<ExtArgs>[]
      banks_cnabs: Prisma.$banks_cnabsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["cnabs"]>
    composites: {}
  }

  type cnabsGetPayload<S extends boolean | null | undefined | cnabsDefaultArgs> = $Result.GetResult<Prisma.$cnabsPayload, S>

  type cnabsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cnabsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CnabsCountAggregateInputType | true
    }

  export interface cnabsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cnabs'], meta: { name: 'cnabs' } }
    /**
     * Find zero or one Cnabs that matches the filter.
     * @param {cnabsFindUniqueArgs} args - Arguments to find a Cnabs
     * @example
     * // Get one Cnabs
     * const cnabs = await prisma.cnabs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cnabsFindUniqueArgs>(args: SelectSubset<T, cnabsFindUniqueArgs<ExtArgs>>): Prisma__cnabsClient<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cnabs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cnabsFindUniqueOrThrowArgs} args - Arguments to find a Cnabs
     * @example
     * // Get one Cnabs
     * const cnabs = await prisma.cnabs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cnabsFindUniqueOrThrowArgs>(args: SelectSubset<T, cnabsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cnabsClient<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cnabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnabsFindFirstArgs} args - Arguments to find a Cnabs
     * @example
     * // Get one Cnabs
     * const cnabs = await prisma.cnabs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cnabsFindFirstArgs>(args?: SelectSubset<T, cnabsFindFirstArgs<ExtArgs>>): Prisma__cnabsClient<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cnabs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnabsFindFirstOrThrowArgs} args - Arguments to find a Cnabs
     * @example
     * // Get one Cnabs
     * const cnabs = await prisma.cnabs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cnabsFindFirstOrThrowArgs>(args?: SelectSubset<T, cnabsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cnabsClient<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cnabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnabsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cnabs
     * const cnabs = await prisma.cnabs.findMany()
     * 
     * // Get first 10 Cnabs
     * const cnabs = await prisma.cnabs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cnabsWithIdOnly = await prisma.cnabs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cnabsFindManyArgs>(args?: SelectSubset<T, cnabsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cnabs.
     * @param {cnabsCreateArgs} args - Arguments to create a Cnabs.
     * @example
     * // Create one Cnabs
     * const Cnabs = await prisma.cnabs.create({
     *   data: {
     *     // ... data to create a Cnabs
     *   }
     * })
     * 
     */
    create<T extends cnabsCreateArgs>(args: SelectSubset<T, cnabsCreateArgs<ExtArgs>>): Prisma__cnabsClient<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cnabs.
     * @param {cnabsCreateManyArgs} args - Arguments to create many Cnabs.
     * @example
     * // Create many Cnabs
     * const cnabs = await prisma.cnabs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cnabsCreateManyArgs>(args?: SelectSubset<T, cnabsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cnabs and returns the data saved in the database.
     * @param {cnabsCreateManyAndReturnArgs} args - Arguments to create many Cnabs.
     * @example
     * // Create many Cnabs
     * const cnabs = await prisma.cnabs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cnabs and only return the `id`
     * const cnabsWithIdOnly = await prisma.cnabs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cnabsCreateManyAndReturnArgs>(args?: SelectSubset<T, cnabsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cnabs.
     * @param {cnabsDeleteArgs} args - Arguments to delete one Cnabs.
     * @example
     * // Delete one Cnabs
     * const Cnabs = await prisma.cnabs.delete({
     *   where: {
     *     // ... filter to delete one Cnabs
     *   }
     * })
     * 
     */
    delete<T extends cnabsDeleteArgs>(args: SelectSubset<T, cnabsDeleteArgs<ExtArgs>>): Prisma__cnabsClient<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cnabs.
     * @param {cnabsUpdateArgs} args - Arguments to update one Cnabs.
     * @example
     * // Update one Cnabs
     * const cnabs = await prisma.cnabs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cnabsUpdateArgs>(args: SelectSubset<T, cnabsUpdateArgs<ExtArgs>>): Prisma__cnabsClient<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cnabs.
     * @param {cnabsDeleteManyArgs} args - Arguments to filter Cnabs to delete.
     * @example
     * // Delete a few Cnabs
     * const { count } = await prisma.cnabs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cnabsDeleteManyArgs>(args?: SelectSubset<T, cnabsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cnabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnabsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cnabs
     * const cnabs = await prisma.cnabs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cnabsUpdateManyArgs>(args: SelectSubset<T, cnabsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cnabs and returns the data updated in the database.
     * @param {cnabsUpdateManyAndReturnArgs} args - Arguments to update many Cnabs.
     * @example
     * // Update many Cnabs
     * const cnabs = await prisma.cnabs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cnabs and only return the `id`
     * const cnabsWithIdOnly = await prisma.cnabs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cnabsUpdateManyAndReturnArgs>(args: SelectSubset<T, cnabsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cnabs.
     * @param {cnabsUpsertArgs} args - Arguments to update or create a Cnabs.
     * @example
     * // Update or create a Cnabs
     * const cnabs = await prisma.cnabs.upsert({
     *   create: {
     *     // ... data to create a Cnabs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cnabs we want to update
     *   }
     * })
     */
    upsert<T extends cnabsUpsertArgs>(args: SelectSubset<T, cnabsUpsertArgs<ExtArgs>>): Prisma__cnabsClient<$Result.GetResult<Prisma.$cnabsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cnabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnabsCountArgs} args - Arguments to filter Cnabs to count.
     * @example
     * // Count the number of Cnabs
     * const count = await prisma.cnabs.count({
     *   where: {
     *     // ... the filter for the Cnabs we want to count
     *   }
     * })
    **/
    count<T extends cnabsCountArgs>(
      args?: Subset<T, cnabsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CnabsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cnabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CnabsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CnabsAggregateArgs>(args: Subset<T, CnabsAggregateArgs>): Prisma.PrismaPromise<GetCnabsAggregateType<T>>

    /**
     * Group by Cnabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnabsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cnabsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cnabsGroupByArgs['orderBy'] }
        : { orderBy?: cnabsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cnabsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCnabsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cnabs model
   */
  readonly fields: cnabsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cnabs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cnabsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authorization_letters<T extends cnabs$authorization_lettersArgs<ExtArgs> = {}>(args?: Subset<T, cnabs$authorization_lettersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorization_lettersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    banks_cnabs<T extends cnabs$banks_cnabsArgs<ExtArgs> = {}>(args?: Subset<T, cnabs$banks_cnabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banks_cnabsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cnabs model
   */
  interface cnabsFieldRefs {
    readonly id: FieldRef<"cnabs", 'Int'>
    readonly name: FieldRef<"cnabs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cnabs findUnique
   */
  export type cnabsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnabsInclude<ExtArgs> | null
    /**
     * Filter, which cnabs to fetch.
     */
    where: cnabsWhereUniqueInput
  }

  /**
   * cnabs findUniqueOrThrow
   */
  export type cnabsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnabsInclude<ExtArgs> | null
    /**
     * Filter, which cnabs to fetch.
     */
    where: cnabsWhereUniqueInput
  }

  /**
   * cnabs findFirst
   */
  export type cnabsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnabsInclude<ExtArgs> | null
    /**
     * Filter, which cnabs to fetch.
     */
    where?: cnabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnabs to fetch.
     */
    orderBy?: cnabsOrderByWithRelationInput | cnabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cnabs.
     */
    cursor?: cnabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cnabs.
     */
    distinct?: CnabsScalarFieldEnum | CnabsScalarFieldEnum[]
  }

  /**
   * cnabs findFirstOrThrow
   */
  export type cnabsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnabsInclude<ExtArgs> | null
    /**
     * Filter, which cnabs to fetch.
     */
    where?: cnabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnabs to fetch.
     */
    orderBy?: cnabsOrderByWithRelationInput | cnabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cnabs.
     */
    cursor?: cnabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cnabs.
     */
    distinct?: CnabsScalarFieldEnum | CnabsScalarFieldEnum[]
  }

  /**
   * cnabs findMany
   */
  export type cnabsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnabsInclude<ExtArgs> | null
    /**
     * Filter, which cnabs to fetch.
     */
    where?: cnabsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnabs to fetch.
     */
    orderBy?: cnabsOrderByWithRelationInput | cnabsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cnabs.
     */
    cursor?: cnabsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnabs.
     */
    skip?: number
    distinct?: CnabsScalarFieldEnum | CnabsScalarFieldEnum[]
  }

  /**
   * cnabs create
   */
  export type cnabsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnabsInclude<ExtArgs> | null
    /**
     * The data needed to create a cnabs.
     */
    data: XOR<cnabsCreateInput, cnabsUncheckedCreateInput>
  }

  /**
   * cnabs createMany
   */
  export type cnabsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cnabs.
     */
    data: cnabsCreateManyInput | cnabsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cnabs createManyAndReturn
   */
  export type cnabsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * The data used to create many cnabs.
     */
    data: cnabsCreateManyInput | cnabsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cnabs update
   */
  export type cnabsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnabsInclude<ExtArgs> | null
    /**
     * The data needed to update a cnabs.
     */
    data: XOR<cnabsUpdateInput, cnabsUncheckedUpdateInput>
    /**
     * Choose, which cnabs to update.
     */
    where: cnabsWhereUniqueInput
  }

  /**
   * cnabs updateMany
   */
  export type cnabsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cnabs.
     */
    data: XOR<cnabsUpdateManyMutationInput, cnabsUncheckedUpdateManyInput>
    /**
     * Filter which cnabs to update
     */
    where?: cnabsWhereInput
    /**
     * Limit how many cnabs to update.
     */
    limit?: number
  }

  /**
   * cnabs updateManyAndReturn
   */
  export type cnabsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * The data used to update cnabs.
     */
    data: XOR<cnabsUpdateManyMutationInput, cnabsUncheckedUpdateManyInput>
    /**
     * Filter which cnabs to update
     */
    where?: cnabsWhereInput
    /**
     * Limit how many cnabs to update.
     */
    limit?: number
  }

  /**
   * cnabs upsert
   */
  export type cnabsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnabsInclude<ExtArgs> | null
    /**
     * The filter to search for the cnabs to update in case it exists.
     */
    where: cnabsWhereUniqueInput
    /**
     * In case the cnabs found by the `where` argument doesn't exist, create a new cnabs with this data.
     */
    create: XOR<cnabsCreateInput, cnabsUncheckedCreateInput>
    /**
     * In case the cnabs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cnabsUpdateInput, cnabsUncheckedUpdateInput>
  }

  /**
   * cnabs delete
   */
  export type cnabsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnabsInclude<ExtArgs> | null
    /**
     * Filter which cnabs to delete.
     */
    where: cnabsWhereUniqueInput
  }

  /**
   * cnabs deleteMany
   */
  export type cnabsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cnabs to delete
     */
    where?: cnabsWhereInput
    /**
     * Limit how many cnabs to delete.
     */
    limit?: number
  }

  /**
   * cnabs.authorization_letters
   */
  export type cnabs$authorization_lettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters
     */
    select?: authorization_lettersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters
     */
    omit?: authorization_lettersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_lettersInclude<ExtArgs> | null
    where?: authorization_lettersWhereInput
    orderBy?: authorization_lettersOrderByWithRelationInput | authorization_lettersOrderByWithRelationInput[]
    cursor?: authorization_lettersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Authorization_lettersScalarFieldEnum | Authorization_lettersScalarFieldEnum[]
  }

  /**
   * cnabs.banks_cnabs
   */
  export type cnabs$banks_cnabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_cnabs
     */
    select?: banks_cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_cnabs
     */
    omit?: banks_cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_cnabsInclude<ExtArgs> | null
    where?: banks_cnabsWhereInput
    orderBy?: banks_cnabsOrderByWithRelationInput | banks_cnabsOrderByWithRelationInput[]
    cursor?: banks_cnabsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Banks_cnabsScalarFieldEnum | Banks_cnabsScalarFieldEnum[]
  }

  /**
   * cnabs without action
   */
  export type cnabsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnabs
     */
    select?: cnabsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnabs
     */
    omit?: cnabsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnabsInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: bigint | null
  }

  export type ProductsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: bigint
    name: string
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    authorization_letters_products?: boolean | products$authorization_letters_productsArgs<ExtArgs>
    banks_products?: boolean | products$banks_productsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorization_letters_products?: boolean | products$authorization_letters_productsArgs<ExtArgs>
    banks_products?: boolean | products$banks_productsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      authorization_letters_products: Prisma.$authorization_letters_productsPayload<ExtArgs>[]
      banks_products: Prisma.$banks_productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authorization_letters_products<T extends products$authorization_letters_productsArgs<ExtArgs> = {}>(args?: Subset<T, products$authorization_letters_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorization_letters_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    banks_products<T extends products$banks_productsArgs<ExtArgs> = {}>(args?: Subset<T, products$banks_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banks_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'BigInt'>
    readonly name: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.authorization_letters_products
   */
  export type products$authorization_letters_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authorization_letters_products
     */
    select?: authorization_letters_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authorization_letters_products
     */
    omit?: authorization_letters_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorization_letters_productsInclude<ExtArgs> | null
    where?: authorization_letters_productsWhereInput
    orderBy?: authorization_letters_productsOrderByWithRelationInput | authorization_letters_productsOrderByWithRelationInput[]
    cursor?: authorization_letters_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Authorization_letters_productsScalarFieldEnum | Authorization_letters_productsScalarFieldEnum[]
  }

  /**
   * products.banks_products
   */
  export type products$banks_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks_products
     */
    select?: banks_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks_products
     */
    omit?: banks_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banks_productsInclude<ExtArgs> | null
    where?: banks_productsWhereInput
    orderBy?: banks_productsOrderByWithRelationInput | banks_productsOrderByWithRelationInput[]
    cursor?: banks_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Banks_productsScalarFieldEnum | Banks_productsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Authorization_lettersScalarFieldEnum: {
    id: 'id',
    cnpj: 'cnpj',
    corporate_name: 'corporate_name',
    responsible_person_name: 'responsible_person_name',
    responsible_person_title: 'responsible_person_title',
    responsible_person_cellphone: 'responsible_person_cellphone',
    responsible_person_email: 'responsible_person_email',
    manager_name: 'manager_name',
    manager_cellphone: 'manager_cellphone',
    manager_email: 'manager_email',
    branch_number: 'branch_number',
    branch_dv: 'branch_dv',
    account_number: 'account_number',
    account_dv: 'account_dv',
    agreement_number: 'agreement_number',
    id_banks: 'id_banks',
    id_cnabs: 'id_cnabs',
    created_at: 'created_at'
  };

  export type Authorization_lettersScalarFieldEnum = (typeof Authorization_lettersScalarFieldEnum)[keyof typeof Authorization_lettersScalarFieldEnum]


  export const Authorization_letters_productsScalarFieldEnum: {
    id: 'id',
    id_products: 'id_products',
    id_authorization_letters: 'id_authorization_letters'
  };

  export type Authorization_letters_productsScalarFieldEnum = (typeof Authorization_letters_productsScalarFieldEnum)[keyof typeof Authorization_letters_productsScalarFieldEnum]


  export const BanksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code'
  };

  export type BanksScalarFieldEnum = (typeof BanksScalarFieldEnum)[keyof typeof BanksScalarFieldEnum]


  export const Banks_cnabsScalarFieldEnum: {
    id: 'id',
    id_banks: 'id_banks',
    id_cnabs: 'id_cnabs'
  };

  export type Banks_cnabsScalarFieldEnum = (typeof Banks_cnabsScalarFieldEnum)[keyof typeof Banks_cnabsScalarFieldEnum]


  export const Banks_productsScalarFieldEnum: {
    id: 'id',
    id_products: 'id_products',
    id_banks: 'id_banks'
  };

  export type Banks_productsScalarFieldEnum = (typeof Banks_productsScalarFieldEnum)[keyof typeof Banks_productsScalarFieldEnum]


  export const CnabsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CnabsScalarFieldEnum = (typeof CnabsScalarFieldEnum)[keyof typeof CnabsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type authorization_lettersWhereInput = {
    AND?: authorization_lettersWhereInput | authorization_lettersWhereInput[]
    OR?: authorization_lettersWhereInput[]
    NOT?: authorization_lettersWhereInput | authorization_lettersWhereInput[]
    id?: BigIntFilter<"authorization_letters"> | bigint | number
    cnpj?: StringFilter<"authorization_letters"> | string
    corporate_name?: StringFilter<"authorization_letters"> | string
    responsible_person_name?: StringFilter<"authorization_letters"> | string
    responsible_person_title?: StringFilter<"authorization_letters"> | string
    responsible_person_cellphone?: StringFilter<"authorization_letters"> | string
    responsible_person_email?: StringFilter<"authorization_letters"> | string
    manager_name?: StringFilter<"authorization_letters"> | string
    manager_cellphone?: StringFilter<"authorization_letters"> | string
    manager_email?: StringFilter<"authorization_letters"> | string
    branch_number?: StringFilter<"authorization_letters"> | string
    branch_dv?: StringFilter<"authorization_letters"> | string
    account_number?: StringFilter<"authorization_letters"> | string
    account_dv?: StringFilter<"authorization_letters"> | string
    agreement_number?: StringFilter<"authorization_letters"> | string
    id_banks?: IntFilter<"authorization_letters"> | number
    id_cnabs?: IntFilter<"authorization_letters"> | number
    created_at?: DateTimeFilter<"authorization_letters"> | Date | string
    banks?: XOR<BanksScalarRelationFilter, banksWhereInput>
    cnabs?: XOR<CnabsScalarRelationFilter, cnabsWhereInput>
    authorization_letters_products?: Authorization_letters_productsListRelationFilter
  }

  export type authorization_lettersOrderByWithRelationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    corporate_name?: SortOrder
    responsible_person_name?: SortOrder
    responsible_person_title?: SortOrder
    responsible_person_cellphone?: SortOrder
    responsible_person_email?: SortOrder
    manager_name?: SortOrder
    manager_cellphone?: SortOrder
    manager_email?: SortOrder
    branch_number?: SortOrder
    branch_dv?: SortOrder
    account_number?: SortOrder
    account_dv?: SortOrder
    agreement_number?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
    created_at?: SortOrder
    banks?: banksOrderByWithRelationInput
    cnabs?: cnabsOrderByWithRelationInput
    authorization_letters_products?: authorization_letters_productsOrderByRelationAggregateInput
  }

  export type authorization_lettersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: authorization_lettersWhereInput | authorization_lettersWhereInput[]
    OR?: authorization_lettersWhereInput[]
    NOT?: authorization_lettersWhereInput | authorization_lettersWhereInput[]
    cnpj?: StringFilter<"authorization_letters"> | string
    corporate_name?: StringFilter<"authorization_letters"> | string
    responsible_person_name?: StringFilter<"authorization_letters"> | string
    responsible_person_title?: StringFilter<"authorization_letters"> | string
    responsible_person_cellphone?: StringFilter<"authorization_letters"> | string
    responsible_person_email?: StringFilter<"authorization_letters"> | string
    manager_name?: StringFilter<"authorization_letters"> | string
    manager_cellphone?: StringFilter<"authorization_letters"> | string
    manager_email?: StringFilter<"authorization_letters"> | string
    branch_number?: StringFilter<"authorization_letters"> | string
    branch_dv?: StringFilter<"authorization_letters"> | string
    account_number?: StringFilter<"authorization_letters"> | string
    account_dv?: StringFilter<"authorization_letters"> | string
    agreement_number?: StringFilter<"authorization_letters"> | string
    id_banks?: IntFilter<"authorization_letters"> | number
    id_cnabs?: IntFilter<"authorization_letters"> | number
    created_at?: DateTimeFilter<"authorization_letters"> | Date | string
    banks?: XOR<BanksScalarRelationFilter, banksWhereInput>
    cnabs?: XOR<CnabsScalarRelationFilter, cnabsWhereInput>
    authorization_letters_products?: Authorization_letters_productsListRelationFilter
  }, "id" | "id">

  export type authorization_lettersOrderByWithAggregationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    corporate_name?: SortOrder
    responsible_person_name?: SortOrder
    responsible_person_title?: SortOrder
    responsible_person_cellphone?: SortOrder
    responsible_person_email?: SortOrder
    manager_name?: SortOrder
    manager_cellphone?: SortOrder
    manager_email?: SortOrder
    branch_number?: SortOrder
    branch_dv?: SortOrder
    account_number?: SortOrder
    account_dv?: SortOrder
    agreement_number?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
    created_at?: SortOrder
    _count?: authorization_lettersCountOrderByAggregateInput
    _avg?: authorization_lettersAvgOrderByAggregateInput
    _max?: authorization_lettersMaxOrderByAggregateInput
    _min?: authorization_lettersMinOrderByAggregateInput
    _sum?: authorization_lettersSumOrderByAggregateInput
  }

  export type authorization_lettersScalarWhereWithAggregatesInput = {
    AND?: authorization_lettersScalarWhereWithAggregatesInput | authorization_lettersScalarWhereWithAggregatesInput[]
    OR?: authorization_lettersScalarWhereWithAggregatesInput[]
    NOT?: authorization_lettersScalarWhereWithAggregatesInput | authorization_lettersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"authorization_letters"> | bigint | number
    cnpj?: StringWithAggregatesFilter<"authorization_letters"> | string
    corporate_name?: StringWithAggregatesFilter<"authorization_letters"> | string
    responsible_person_name?: StringWithAggregatesFilter<"authorization_letters"> | string
    responsible_person_title?: StringWithAggregatesFilter<"authorization_letters"> | string
    responsible_person_cellphone?: StringWithAggregatesFilter<"authorization_letters"> | string
    responsible_person_email?: StringWithAggregatesFilter<"authorization_letters"> | string
    manager_name?: StringWithAggregatesFilter<"authorization_letters"> | string
    manager_cellphone?: StringWithAggregatesFilter<"authorization_letters"> | string
    manager_email?: StringWithAggregatesFilter<"authorization_letters"> | string
    branch_number?: StringWithAggregatesFilter<"authorization_letters"> | string
    branch_dv?: StringWithAggregatesFilter<"authorization_letters"> | string
    account_number?: StringWithAggregatesFilter<"authorization_letters"> | string
    account_dv?: StringWithAggregatesFilter<"authorization_letters"> | string
    agreement_number?: StringWithAggregatesFilter<"authorization_letters"> | string
    id_banks?: IntWithAggregatesFilter<"authorization_letters"> | number
    id_cnabs?: IntWithAggregatesFilter<"authorization_letters"> | number
    created_at?: DateTimeWithAggregatesFilter<"authorization_letters"> | Date | string
  }

  export type authorization_letters_productsWhereInput = {
    AND?: authorization_letters_productsWhereInput | authorization_letters_productsWhereInput[]
    OR?: authorization_letters_productsWhereInput[]
    NOT?: authorization_letters_productsWhereInput | authorization_letters_productsWhereInput[]
    id?: BigIntFilter<"authorization_letters_products"> | bigint | number
    id_products?: BigIntFilter<"authorization_letters_products"> | bigint | number
    id_authorization_letters?: BigIntFilter<"authorization_letters_products"> | bigint | number
    authorization_letters?: XOR<Authorization_lettersScalarRelationFilter, authorization_lettersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type authorization_letters_productsOrderByWithRelationInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_authorization_letters?: SortOrder
    authorization_letters?: authorization_lettersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type authorization_letters_productsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: authorization_letters_productsWhereInput | authorization_letters_productsWhereInput[]
    OR?: authorization_letters_productsWhereInput[]
    NOT?: authorization_letters_productsWhereInput | authorization_letters_productsWhereInput[]
    id_products?: BigIntFilter<"authorization_letters_products"> | bigint | number
    id_authorization_letters?: BigIntFilter<"authorization_letters_products"> | bigint | number
    authorization_letters?: XOR<Authorization_lettersScalarRelationFilter, authorization_lettersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id" | "id">

  export type authorization_letters_productsOrderByWithAggregationInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_authorization_letters?: SortOrder
    _count?: authorization_letters_productsCountOrderByAggregateInput
    _avg?: authorization_letters_productsAvgOrderByAggregateInput
    _max?: authorization_letters_productsMaxOrderByAggregateInput
    _min?: authorization_letters_productsMinOrderByAggregateInput
    _sum?: authorization_letters_productsSumOrderByAggregateInput
  }

  export type authorization_letters_productsScalarWhereWithAggregatesInput = {
    AND?: authorization_letters_productsScalarWhereWithAggregatesInput | authorization_letters_productsScalarWhereWithAggregatesInput[]
    OR?: authorization_letters_productsScalarWhereWithAggregatesInput[]
    NOT?: authorization_letters_productsScalarWhereWithAggregatesInput | authorization_letters_productsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"authorization_letters_products"> | bigint | number
    id_products?: BigIntWithAggregatesFilter<"authorization_letters_products"> | bigint | number
    id_authorization_letters?: BigIntWithAggregatesFilter<"authorization_letters_products"> | bigint | number
  }

  export type banksWhereInput = {
    AND?: banksWhereInput | banksWhereInput[]
    OR?: banksWhereInput[]
    NOT?: banksWhereInput | banksWhereInput[]
    id?: IntFilter<"banks"> | number
    name?: StringFilter<"banks"> | string
    code?: StringFilter<"banks"> | string
    authorization_letters?: Authorization_lettersListRelationFilter
    banks_cnabs?: Banks_cnabsListRelationFilter
    banks_products?: Banks_productsListRelationFilter
  }

  export type banksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    authorization_letters?: authorization_lettersOrderByRelationAggregateInput
    banks_cnabs?: banks_cnabsOrderByRelationAggregateInput
    banks_products?: banks_productsOrderByRelationAggregateInput
  }

  export type banksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    code?: string
    AND?: banksWhereInput | banksWhereInput[]
    OR?: banksWhereInput[]
    NOT?: banksWhereInput | banksWhereInput[]
    authorization_letters?: Authorization_lettersListRelationFilter
    banks_cnabs?: Banks_cnabsListRelationFilter
    banks_products?: Banks_productsListRelationFilter
  }, "id" | "id" | "name" | "code">

  export type banksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    _count?: banksCountOrderByAggregateInput
    _avg?: banksAvgOrderByAggregateInput
    _max?: banksMaxOrderByAggregateInput
    _min?: banksMinOrderByAggregateInput
    _sum?: banksSumOrderByAggregateInput
  }

  export type banksScalarWhereWithAggregatesInput = {
    AND?: banksScalarWhereWithAggregatesInput | banksScalarWhereWithAggregatesInput[]
    OR?: banksScalarWhereWithAggregatesInput[]
    NOT?: banksScalarWhereWithAggregatesInput | banksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"banks"> | number
    name?: StringWithAggregatesFilter<"banks"> | string
    code?: StringWithAggregatesFilter<"banks"> | string
  }

  export type banks_cnabsWhereInput = {
    AND?: banks_cnabsWhereInput | banks_cnabsWhereInput[]
    OR?: banks_cnabsWhereInput[]
    NOT?: banks_cnabsWhereInput | banks_cnabsWhereInput[]
    id?: BigIntFilter<"banks_cnabs"> | bigint | number
    id_banks?: IntFilter<"banks_cnabs"> | number
    id_cnabs?: IntFilter<"banks_cnabs"> | number
    banks?: XOR<BanksScalarRelationFilter, banksWhereInput>
    cnabs?: XOR<CnabsScalarRelationFilter, cnabsWhereInput>
  }

  export type banks_cnabsOrderByWithRelationInput = {
    id?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
    banks?: banksOrderByWithRelationInput
    cnabs?: cnabsOrderByWithRelationInput
  }

  export type banks_cnabsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: banks_cnabsWhereInput | banks_cnabsWhereInput[]
    OR?: banks_cnabsWhereInput[]
    NOT?: banks_cnabsWhereInput | banks_cnabsWhereInput[]
    id_banks?: IntFilter<"banks_cnabs"> | number
    id_cnabs?: IntFilter<"banks_cnabs"> | number
    banks?: XOR<BanksScalarRelationFilter, banksWhereInput>
    cnabs?: XOR<CnabsScalarRelationFilter, cnabsWhereInput>
  }, "id">

  export type banks_cnabsOrderByWithAggregationInput = {
    id?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
    _count?: banks_cnabsCountOrderByAggregateInput
    _avg?: banks_cnabsAvgOrderByAggregateInput
    _max?: banks_cnabsMaxOrderByAggregateInput
    _min?: banks_cnabsMinOrderByAggregateInput
    _sum?: banks_cnabsSumOrderByAggregateInput
  }

  export type banks_cnabsScalarWhereWithAggregatesInput = {
    AND?: banks_cnabsScalarWhereWithAggregatesInput | banks_cnabsScalarWhereWithAggregatesInput[]
    OR?: banks_cnabsScalarWhereWithAggregatesInput[]
    NOT?: banks_cnabsScalarWhereWithAggregatesInput | banks_cnabsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"banks_cnabs"> | bigint | number
    id_banks?: IntWithAggregatesFilter<"banks_cnabs"> | number
    id_cnabs?: IntWithAggregatesFilter<"banks_cnabs"> | number
  }

  export type banks_productsWhereInput = {
    AND?: banks_productsWhereInput | banks_productsWhereInput[]
    OR?: banks_productsWhereInput[]
    NOT?: banks_productsWhereInput | banks_productsWhereInput[]
    id?: BigIntFilter<"banks_products"> | bigint | number
    id_products?: BigIntFilter<"banks_products"> | bigint | number
    id_banks?: IntFilter<"banks_products"> | number
    banks?: XOR<BanksScalarRelationFilter, banksWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type banks_productsOrderByWithRelationInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_banks?: SortOrder
    banks?: banksOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type banks_productsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: banks_productsWhereInput | banks_productsWhereInput[]
    OR?: banks_productsWhereInput[]
    NOT?: banks_productsWhereInput | banks_productsWhereInput[]
    id_products?: BigIntFilter<"banks_products"> | bigint | number
    id_banks?: IntFilter<"banks_products"> | number
    banks?: XOR<BanksScalarRelationFilter, banksWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id" | "id">

  export type banks_productsOrderByWithAggregationInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_banks?: SortOrder
    _count?: banks_productsCountOrderByAggregateInput
    _avg?: banks_productsAvgOrderByAggregateInput
    _max?: banks_productsMaxOrderByAggregateInput
    _min?: banks_productsMinOrderByAggregateInput
    _sum?: banks_productsSumOrderByAggregateInput
  }

  export type banks_productsScalarWhereWithAggregatesInput = {
    AND?: banks_productsScalarWhereWithAggregatesInput | banks_productsScalarWhereWithAggregatesInput[]
    OR?: banks_productsScalarWhereWithAggregatesInput[]
    NOT?: banks_productsScalarWhereWithAggregatesInput | banks_productsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"banks_products"> | bigint | number
    id_products?: BigIntWithAggregatesFilter<"banks_products"> | bigint | number
    id_banks?: IntWithAggregatesFilter<"banks_products"> | number
  }

  export type cnabsWhereInput = {
    AND?: cnabsWhereInput | cnabsWhereInput[]
    OR?: cnabsWhereInput[]
    NOT?: cnabsWhereInput | cnabsWhereInput[]
    id?: IntFilter<"cnabs"> | number
    name?: StringFilter<"cnabs"> | string
    authorization_letters?: Authorization_lettersListRelationFilter
    banks_cnabs?: Banks_cnabsListRelationFilter
  }

  export type cnabsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    authorization_letters?: authorization_lettersOrderByRelationAggregateInput
    banks_cnabs?: banks_cnabsOrderByRelationAggregateInput
  }

  export type cnabsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cnabsWhereInput | cnabsWhereInput[]
    OR?: cnabsWhereInput[]
    NOT?: cnabsWhereInput | cnabsWhereInput[]
    name?: StringFilter<"cnabs"> | string
    authorization_letters?: Authorization_lettersListRelationFilter
    banks_cnabs?: Banks_cnabsListRelationFilter
  }, "id" | "id">

  export type cnabsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: cnabsCountOrderByAggregateInput
    _avg?: cnabsAvgOrderByAggregateInput
    _max?: cnabsMaxOrderByAggregateInput
    _min?: cnabsMinOrderByAggregateInput
    _sum?: cnabsSumOrderByAggregateInput
  }

  export type cnabsScalarWhereWithAggregatesInput = {
    AND?: cnabsScalarWhereWithAggregatesInput | cnabsScalarWhereWithAggregatesInput[]
    OR?: cnabsScalarWhereWithAggregatesInput[]
    NOT?: cnabsScalarWhereWithAggregatesInput | cnabsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cnabs"> | number
    name?: StringWithAggregatesFilter<"cnabs"> | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: BigIntFilter<"products"> | bigint | number
    name?: StringFilter<"products"> | string
    authorization_letters_products?: Authorization_letters_productsListRelationFilter
    banks_products?: Banks_productsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    authorization_letters_products?: authorization_letters_productsOrderByRelationAggregateInput
    banks_products?: banks_productsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    authorization_letters_products?: Authorization_letters_productsListRelationFilter
    banks_products?: Banks_productsListRelationFilter
  }, "id" | "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"products"> | bigint | number
    name?: StringWithAggregatesFilter<"products"> | string
  }

  export type authorization_lettersCreateInput = {
    id?: bigint | number
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    created_at: Date | string
    banks: banksCreateNestedOneWithoutAuthorization_lettersInput
    cnabs: cnabsCreateNestedOneWithoutAuthorization_lettersInput
    authorization_letters_products?: authorization_letters_productsCreateNestedManyWithoutAuthorization_lettersInput
  }

  export type authorization_lettersUncheckedCreateInput = {
    id?: bigint | number
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    id_banks: number
    id_cnabs: number
    created_at: Date | string
    authorization_letters_products?: authorization_letters_productsUncheckedCreateNestedManyWithoutAuthorization_lettersInput
  }

  export type authorization_lettersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    banks?: banksUpdateOneRequiredWithoutAuthorization_lettersNestedInput
    cnabs?: cnabsUpdateOneRequiredWithoutAuthorization_lettersNestedInput
    authorization_letters_products?: authorization_letters_productsUpdateManyWithoutAuthorization_lettersNestedInput
  }

  export type authorization_lettersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    id_banks?: IntFieldUpdateOperationsInput | number
    id_cnabs?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authorization_letters_products?: authorization_letters_productsUncheckedUpdateManyWithoutAuthorization_lettersNestedInput
  }

  export type authorization_lettersCreateManyInput = {
    id?: bigint | number
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    id_banks: number
    id_cnabs: number
    created_at: Date | string
  }

  export type authorization_lettersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authorization_lettersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    id_banks?: IntFieldUpdateOperationsInput | number
    id_cnabs?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authorization_letters_productsCreateInput = {
    id?: bigint | number
    authorization_letters: authorization_lettersCreateNestedOneWithoutAuthorization_letters_productsInput
    products: productsCreateNestedOneWithoutAuthorization_letters_productsInput
  }

  export type authorization_letters_productsUncheckedCreateInput = {
    id?: bigint | number
    id_products: bigint | number
    id_authorization_letters: bigint | number
  }

  export type authorization_letters_productsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    authorization_letters?: authorization_lettersUpdateOneRequiredWithoutAuthorization_letters_productsNestedInput
    products?: productsUpdateOneRequiredWithoutAuthorization_letters_productsNestedInput
  }

  export type authorization_letters_productsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_products?: BigIntFieldUpdateOperationsInput | bigint | number
    id_authorization_letters?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type authorization_letters_productsCreateManyInput = {
    id?: bigint | number
    id_products: bigint | number
    id_authorization_letters: bigint | number
  }

  export type authorization_letters_productsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type authorization_letters_productsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_products?: BigIntFieldUpdateOperationsInput | bigint | number
    id_authorization_letters?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type banksCreateInput = {
    name: string
    code: string
    authorization_letters?: authorization_lettersCreateNestedManyWithoutBanksInput
    banks_cnabs?: banks_cnabsCreateNestedManyWithoutBanksInput
    banks_products?: banks_productsCreateNestedManyWithoutBanksInput
  }

  export type banksUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    authorization_letters?: authorization_lettersUncheckedCreateNestedManyWithoutBanksInput
    banks_cnabs?: banks_cnabsUncheckedCreateNestedManyWithoutBanksInput
    banks_products?: banks_productsUncheckedCreateNestedManyWithoutBanksInput
  }

  export type banksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    authorization_letters?: authorization_lettersUpdateManyWithoutBanksNestedInput
    banks_cnabs?: banks_cnabsUpdateManyWithoutBanksNestedInput
    banks_products?: banks_productsUpdateManyWithoutBanksNestedInput
  }

  export type banksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    authorization_letters?: authorization_lettersUncheckedUpdateManyWithoutBanksNestedInput
    banks_cnabs?: banks_cnabsUncheckedUpdateManyWithoutBanksNestedInput
    banks_products?: banks_productsUncheckedUpdateManyWithoutBanksNestedInput
  }

  export type banksCreateManyInput = {
    id?: number
    name: string
    code: string
  }

  export type banksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type banksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type banks_cnabsCreateInput = {
    id?: bigint | number
    banks: banksCreateNestedOneWithoutBanks_cnabsInput
    cnabs: cnabsCreateNestedOneWithoutBanks_cnabsInput
  }

  export type banks_cnabsUncheckedCreateInput = {
    id?: bigint | number
    id_banks: number
    id_cnabs: number
  }

  export type banks_cnabsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    banks?: banksUpdateOneRequiredWithoutBanks_cnabsNestedInput
    cnabs?: cnabsUpdateOneRequiredWithoutBanks_cnabsNestedInput
  }

  export type banks_cnabsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_banks?: IntFieldUpdateOperationsInput | number
    id_cnabs?: IntFieldUpdateOperationsInput | number
  }

  export type banks_cnabsCreateManyInput = {
    id?: bigint | number
    id_banks: number
    id_cnabs: number
  }

  export type banks_cnabsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type banks_cnabsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_banks?: IntFieldUpdateOperationsInput | number
    id_cnabs?: IntFieldUpdateOperationsInput | number
  }

  export type banks_productsCreateInput = {
    id?: bigint | number
    banks: banksCreateNestedOneWithoutBanks_productsInput
    products: productsCreateNestedOneWithoutBanks_productsInput
  }

  export type banks_productsUncheckedCreateInput = {
    id?: bigint | number
    id_products: bigint | number
    id_banks: number
  }

  export type banks_productsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    banks?: banksUpdateOneRequiredWithoutBanks_productsNestedInput
    products?: productsUpdateOneRequiredWithoutBanks_productsNestedInput
  }

  export type banks_productsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_products?: BigIntFieldUpdateOperationsInput | bigint | number
    id_banks?: IntFieldUpdateOperationsInput | number
  }

  export type banks_productsCreateManyInput = {
    id?: bigint | number
    id_products: bigint | number
    id_banks: number
  }

  export type banks_productsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type banks_productsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_products?: BigIntFieldUpdateOperationsInput | bigint | number
    id_banks?: IntFieldUpdateOperationsInput | number
  }

  export type cnabsCreateInput = {
    name: string
    authorization_letters?: authorization_lettersCreateNestedManyWithoutCnabsInput
    banks_cnabs?: banks_cnabsCreateNestedManyWithoutCnabsInput
  }

  export type cnabsUncheckedCreateInput = {
    id?: number
    name: string
    authorization_letters?: authorization_lettersUncheckedCreateNestedManyWithoutCnabsInput
    banks_cnabs?: banks_cnabsUncheckedCreateNestedManyWithoutCnabsInput
  }

  export type cnabsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    authorization_letters?: authorization_lettersUpdateManyWithoutCnabsNestedInput
    banks_cnabs?: banks_cnabsUpdateManyWithoutCnabsNestedInput
  }

  export type cnabsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    authorization_letters?: authorization_lettersUncheckedUpdateManyWithoutCnabsNestedInput
    banks_cnabs?: banks_cnabsUncheckedUpdateManyWithoutCnabsNestedInput
  }

  export type cnabsCreateManyInput = {
    id?: number
    name: string
  }

  export type cnabsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type cnabsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type productsCreateInput = {
    id?: bigint | number
    name: string
    authorization_letters_products?: authorization_letters_productsCreateNestedManyWithoutProductsInput
    banks_products?: banks_productsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: bigint | number
    name: string
    authorization_letters_products?: authorization_letters_productsUncheckedCreateNestedManyWithoutProductsInput
    banks_products?: banks_productsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    authorization_letters_products?: authorization_letters_productsUpdateManyWithoutProductsNestedInput
    banks_products?: banks_productsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    authorization_letters_products?: authorization_letters_productsUncheckedUpdateManyWithoutProductsNestedInput
    banks_products?: banks_productsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type productsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type productsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BanksScalarRelationFilter = {
    is?: banksWhereInput
    isNot?: banksWhereInput
  }

  export type CnabsScalarRelationFilter = {
    is?: cnabsWhereInput
    isNot?: cnabsWhereInput
  }

  export type Authorization_letters_productsListRelationFilter = {
    every?: authorization_letters_productsWhereInput
    some?: authorization_letters_productsWhereInput
    none?: authorization_letters_productsWhereInput
  }

  export type authorization_letters_productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authorization_lettersCountOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    corporate_name?: SortOrder
    responsible_person_name?: SortOrder
    responsible_person_title?: SortOrder
    responsible_person_cellphone?: SortOrder
    responsible_person_email?: SortOrder
    manager_name?: SortOrder
    manager_cellphone?: SortOrder
    manager_email?: SortOrder
    branch_number?: SortOrder
    branch_dv?: SortOrder
    account_number?: SortOrder
    account_dv?: SortOrder
    agreement_number?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
    created_at?: SortOrder
  }

  export type authorization_lettersAvgOrderByAggregateInput = {
    id?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
  }

  export type authorization_lettersMaxOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    corporate_name?: SortOrder
    responsible_person_name?: SortOrder
    responsible_person_title?: SortOrder
    responsible_person_cellphone?: SortOrder
    responsible_person_email?: SortOrder
    manager_name?: SortOrder
    manager_cellphone?: SortOrder
    manager_email?: SortOrder
    branch_number?: SortOrder
    branch_dv?: SortOrder
    account_number?: SortOrder
    account_dv?: SortOrder
    agreement_number?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
    created_at?: SortOrder
  }

  export type authorization_lettersMinOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    corporate_name?: SortOrder
    responsible_person_name?: SortOrder
    responsible_person_title?: SortOrder
    responsible_person_cellphone?: SortOrder
    responsible_person_email?: SortOrder
    manager_name?: SortOrder
    manager_cellphone?: SortOrder
    manager_email?: SortOrder
    branch_number?: SortOrder
    branch_dv?: SortOrder
    account_number?: SortOrder
    account_dv?: SortOrder
    agreement_number?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
    created_at?: SortOrder
  }

  export type authorization_lettersSumOrderByAggregateInput = {
    id?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Authorization_lettersScalarRelationFilter = {
    is?: authorization_lettersWhereInput
    isNot?: authorization_lettersWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type authorization_letters_productsCountOrderByAggregateInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_authorization_letters?: SortOrder
  }

  export type authorization_letters_productsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_authorization_letters?: SortOrder
  }

  export type authorization_letters_productsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_authorization_letters?: SortOrder
  }

  export type authorization_letters_productsMinOrderByAggregateInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_authorization_letters?: SortOrder
  }

  export type authorization_letters_productsSumOrderByAggregateInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_authorization_letters?: SortOrder
  }

  export type Authorization_lettersListRelationFilter = {
    every?: authorization_lettersWhereInput
    some?: authorization_lettersWhereInput
    none?: authorization_lettersWhereInput
  }

  export type Banks_cnabsListRelationFilter = {
    every?: banks_cnabsWhereInput
    some?: banks_cnabsWhereInput
    none?: banks_cnabsWhereInput
  }

  export type Banks_productsListRelationFilter = {
    every?: banks_productsWhereInput
    some?: banks_productsWhereInput
    none?: banks_productsWhereInput
  }

  export type authorization_lettersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type banks_cnabsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type banks_productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type banksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type banksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type banksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type banksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type banksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type banks_cnabsCountOrderByAggregateInput = {
    id?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
  }

  export type banks_cnabsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
  }

  export type banks_cnabsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
  }

  export type banks_cnabsMinOrderByAggregateInput = {
    id?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
  }

  export type banks_cnabsSumOrderByAggregateInput = {
    id?: SortOrder
    id_banks?: SortOrder
    id_cnabs?: SortOrder
  }

  export type banks_productsCountOrderByAggregateInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_banks?: SortOrder
  }

  export type banks_productsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_banks?: SortOrder
  }

  export type banks_productsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_banks?: SortOrder
  }

  export type banks_productsMinOrderByAggregateInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_banks?: SortOrder
  }

  export type banks_productsSumOrderByAggregateInput = {
    id?: SortOrder
    id_products?: SortOrder
    id_banks?: SortOrder
  }

  export type cnabsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type cnabsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cnabsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type cnabsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type cnabsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type banksCreateNestedOneWithoutAuthorization_lettersInput = {
    create?: XOR<banksCreateWithoutAuthorization_lettersInput, banksUncheckedCreateWithoutAuthorization_lettersInput>
    connectOrCreate?: banksCreateOrConnectWithoutAuthorization_lettersInput
    connect?: banksWhereUniqueInput
  }

  export type cnabsCreateNestedOneWithoutAuthorization_lettersInput = {
    create?: XOR<cnabsCreateWithoutAuthorization_lettersInput, cnabsUncheckedCreateWithoutAuthorization_lettersInput>
    connectOrCreate?: cnabsCreateOrConnectWithoutAuthorization_lettersInput
    connect?: cnabsWhereUniqueInput
  }

  export type authorization_letters_productsCreateNestedManyWithoutAuthorization_lettersInput = {
    create?: XOR<authorization_letters_productsCreateWithoutAuthorization_lettersInput, authorization_letters_productsUncheckedCreateWithoutAuthorization_lettersInput> | authorization_letters_productsCreateWithoutAuthorization_lettersInput[] | authorization_letters_productsUncheckedCreateWithoutAuthorization_lettersInput[]
    connectOrCreate?: authorization_letters_productsCreateOrConnectWithoutAuthorization_lettersInput | authorization_letters_productsCreateOrConnectWithoutAuthorization_lettersInput[]
    createMany?: authorization_letters_productsCreateManyAuthorization_lettersInputEnvelope
    connect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
  }

  export type authorization_letters_productsUncheckedCreateNestedManyWithoutAuthorization_lettersInput = {
    create?: XOR<authorization_letters_productsCreateWithoutAuthorization_lettersInput, authorization_letters_productsUncheckedCreateWithoutAuthorization_lettersInput> | authorization_letters_productsCreateWithoutAuthorization_lettersInput[] | authorization_letters_productsUncheckedCreateWithoutAuthorization_lettersInput[]
    connectOrCreate?: authorization_letters_productsCreateOrConnectWithoutAuthorization_lettersInput | authorization_letters_productsCreateOrConnectWithoutAuthorization_lettersInput[]
    createMany?: authorization_letters_productsCreateManyAuthorization_lettersInputEnvelope
    connect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type banksUpdateOneRequiredWithoutAuthorization_lettersNestedInput = {
    create?: XOR<banksCreateWithoutAuthorization_lettersInput, banksUncheckedCreateWithoutAuthorization_lettersInput>
    connectOrCreate?: banksCreateOrConnectWithoutAuthorization_lettersInput
    upsert?: banksUpsertWithoutAuthorization_lettersInput
    connect?: banksWhereUniqueInput
    update?: XOR<XOR<banksUpdateToOneWithWhereWithoutAuthorization_lettersInput, banksUpdateWithoutAuthorization_lettersInput>, banksUncheckedUpdateWithoutAuthorization_lettersInput>
  }

  export type cnabsUpdateOneRequiredWithoutAuthorization_lettersNestedInput = {
    create?: XOR<cnabsCreateWithoutAuthorization_lettersInput, cnabsUncheckedCreateWithoutAuthorization_lettersInput>
    connectOrCreate?: cnabsCreateOrConnectWithoutAuthorization_lettersInput
    upsert?: cnabsUpsertWithoutAuthorization_lettersInput
    connect?: cnabsWhereUniqueInput
    update?: XOR<XOR<cnabsUpdateToOneWithWhereWithoutAuthorization_lettersInput, cnabsUpdateWithoutAuthorization_lettersInput>, cnabsUncheckedUpdateWithoutAuthorization_lettersInput>
  }

  export type authorization_letters_productsUpdateManyWithoutAuthorization_lettersNestedInput = {
    create?: XOR<authorization_letters_productsCreateWithoutAuthorization_lettersInput, authorization_letters_productsUncheckedCreateWithoutAuthorization_lettersInput> | authorization_letters_productsCreateWithoutAuthorization_lettersInput[] | authorization_letters_productsUncheckedCreateWithoutAuthorization_lettersInput[]
    connectOrCreate?: authorization_letters_productsCreateOrConnectWithoutAuthorization_lettersInput | authorization_letters_productsCreateOrConnectWithoutAuthorization_lettersInput[]
    upsert?: authorization_letters_productsUpsertWithWhereUniqueWithoutAuthorization_lettersInput | authorization_letters_productsUpsertWithWhereUniqueWithoutAuthorization_lettersInput[]
    createMany?: authorization_letters_productsCreateManyAuthorization_lettersInputEnvelope
    set?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    disconnect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    delete?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    connect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    update?: authorization_letters_productsUpdateWithWhereUniqueWithoutAuthorization_lettersInput | authorization_letters_productsUpdateWithWhereUniqueWithoutAuthorization_lettersInput[]
    updateMany?: authorization_letters_productsUpdateManyWithWhereWithoutAuthorization_lettersInput | authorization_letters_productsUpdateManyWithWhereWithoutAuthorization_lettersInput[]
    deleteMany?: authorization_letters_productsScalarWhereInput | authorization_letters_productsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type authorization_letters_productsUncheckedUpdateManyWithoutAuthorization_lettersNestedInput = {
    create?: XOR<authorization_letters_productsCreateWithoutAuthorization_lettersInput, authorization_letters_productsUncheckedCreateWithoutAuthorization_lettersInput> | authorization_letters_productsCreateWithoutAuthorization_lettersInput[] | authorization_letters_productsUncheckedCreateWithoutAuthorization_lettersInput[]
    connectOrCreate?: authorization_letters_productsCreateOrConnectWithoutAuthorization_lettersInput | authorization_letters_productsCreateOrConnectWithoutAuthorization_lettersInput[]
    upsert?: authorization_letters_productsUpsertWithWhereUniqueWithoutAuthorization_lettersInput | authorization_letters_productsUpsertWithWhereUniqueWithoutAuthorization_lettersInput[]
    createMany?: authorization_letters_productsCreateManyAuthorization_lettersInputEnvelope
    set?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    disconnect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    delete?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    connect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    update?: authorization_letters_productsUpdateWithWhereUniqueWithoutAuthorization_lettersInput | authorization_letters_productsUpdateWithWhereUniqueWithoutAuthorization_lettersInput[]
    updateMany?: authorization_letters_productsUpdateManyWithWhereWithoutAuthorization_lettersInput | authorization_letters_productsUpdateManyWithWhereWithoutAuthorization_lettersInput[]
    deleteMany?: authorization_letters_productsScalarWhereInput | authorization_letters_productsScalarWhereInput[]
  }

  export type authorization_lettersCreateNestedOneWithoutAuthorization_letters_productsInput = {
    create?: XOR<authorization_lettersCreateWithoutAuthorization_letters_productsInput, authorization_lettersUncheckedCreateWithoutAuthorization_letters_productsInput>
    connectOrCreate?: authorization_lettersCreateOrConnectWithoutAuthorization_letters_productsInput
    connect?: authorization_lettersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutAuthorization_letters_productsInput = {
    create?: XOR<productsCreateWithoutAuthorization_letters_productsInput, productsUncheckedCreateWithoutAuthorization_letters_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutAuthorization_letters_productsInput
    connect?: productsWhereUniqueInput
  }

  export type authorization_lettersUpdateOneRequiredWithoutAuthorization_letters_productsNestedInput = {
    create?: XOR<authorization_lettersCreateWithoutAuthorization_letters_productsInput, authorization_lettersUncheckedCreateWithoutAuthorization_letters_productsInput>
    connectOrCreate?: authorization_lettersCreateOrConnectWithoutAuthorization_letters_productsInput
    upsert?: authorization_lettersUpsertWithoutAuthorization_letters_productsInput
    connect?: authorization_lettersWhereUniqueInput
    update?: XOR<XOR<authorization_lettersUpdateToOneWithWhereWithoutAuthorization_letters_productsInput, authorization_lettersUpdateWithoutAuthorization_letters_productsInput>, authorization_lettersUncheckedUpdateWithoutAuthorization_letters_productsInput>
  }

  export type productsUpdateOneRequiredWithoutAuthorization_letters_productsNestedInput = {
    create?: XOR<productsCreateWithoutAuthorization_letters_productsInput, productsUncheckedCreateWithoutAuthorization_letters_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutAuthorization_letters_productsInput
    upsert?: productsUpsertWithoutAuthorization_letters_productsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutAuthorization_letters_productsInput, productsUpdateWithoutAuthorization_letters_productsInput>, productsUncheckedUpdateWithoutAuthorization_letters_productsInput>
  }

  export type authorization_lettersCreateNestedManyWithoutBanksInput = {
    create?: XOR<authorization_lettersCreateWithoutBanksInput, authorization_lettersUncheckedCreateWithoutBanksInput> | authorization_lettersCreateWithoutBanksInput[] | authorization_lettersUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: authorization_lettersCreateOrConnectWithoutBanksInput | authorization_lettersCreateOrConnectWithoutBanksInput[]
    createMany?: authorization_lettersCreateManyBanksInputEnvelope
    connect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
  }

  export type banks_cnabsCreateNestedManyWithoutBanksInput = {
    create?: XOR<banks_cnabsCreateWithoutBanksInput, banks_cnabsUncheckedCreateWithoutBanksInput> | banks_cnabsCreateWithoutBanksInput[] | banks_cnabsUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: banks_cnabsCreateOrConnectWithoutBanksInput | banks_cnabsCreateOrConnectWithoutBanksInput[]
    createMany?: banks_cnabsCreateManyBanksInputEnvelope
    connect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
  }

  export type banks_productsCreateNestedManyWithoutBanksInput = {
    create?: XOR<banks_productsCreateWithoutBanksInput, banks_productsUncheckedCreateWithoutBanksInput> | banks_productsCreateWithoutBanksInput[] | banks_productsUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: banks_productsCreateOrConnectWithoutBanksInput | banks_productsCreateOrConnectWithoutBanksInput[]
    createMany?: banks_productsCreateManyBanksInputEnvelope
    connect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
  }

  export type authorization_lettersUncheckedCreateNestedManyWithoutBanksInput = {
    create?: XOR<authorization_lettersCreateWithoutBanksInput, authorization_lettersUncheckedCreateWithoutBanksInput> | authorization_lettersCreateWithoutBanksInput[] | authorization_lettersUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: authorization_lettersCreateOrConnectWithoutBanksInput | authorization_lettersCreateOrConnectWithoutBanksInput[]
    createMany?: authorization_lettersCreateManyBanksInputEnvelope
    connect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
  }

  export type banks_cnabsUncheckedCreateNestedManyWithoutBanksInput = {
    create?: XOR<banks_cnabsCreateWithoutBanksInput, banks_cnabsUncheckedCreateWithoutBanksInput> | banks_cnabsCreateWithoutBanksInput[] | banks_cnabsUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: banks_cnabsCreateOrConnectWithoutBanksInput | banks_cnabsCreateOrConnectWithoutBanksInput[]
    createMany?: banks_cnabsCreateManyBanksInputEnvelope
    connect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
  }

  export type banks_productsUncheckedCreateNestedManyWithoutBanksInput = {
    create?: XOR<banks_productsCreateWithoutBanksInput, banks_productsUncheckedCreateWithoutBanksInput> | banks_productsCreateWithoutBanksInput[] | banks_productsUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: banks_productsCreateOrConnectWithoutBanksInput | banks_productsCreateOrConnectWithoutBanksInput[]
    createMany?: banks_productsCreateManyBanksInputEnvelope
    connect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
  }

  export type authorization_lettersUpdateManyWithoutBanksNestedInput = {
    create?: XOR<authorization_lettersCreateWithoutBanksInput, authorization_lettersUncheckedCreateWithoutBanksInput> | authorization_lettersCreateWithoutBanksInput[] | authorization_lettersUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: authorization_lettersCreateOrConnectWithoutBanksInput | authorization_lettersCreateOrConnectWithoutBanksInput[]
    upsert?: authorization_lettersUpsertWithWhereUniqueWithoutBanksInput | authorization_lettersUpsertWithWhereUniqueWithoutBanksInput[]
    createMany?: authorization_lettersCreateManyBanksInputEnvelope
    set?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    disconnect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    delete?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    connect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    update?: authorization_lettersUpdateWithWhereUniqueWithoutBanksInput | authorization_lettersUpdateWithWhereUniqueWithoutBanksInput[]
    updateMany?: authorization_lettersUpdateManyWithWhereWithoutBanksInput | authorization_lettersUpdateManyWithWhereWithoutBanksInput[]
    deleteMany?: authorization_lettersScalarWhereInput | authorization_lettersScalarWhereInput[]
  }

  export type banks_cnabsUpdateManyWithoutBanksNestedInput = {
    create?: XOR<banks_cnabsCreateWithoutBanksInput, banks_cnabsUncheckedCreateWithoutBanksInput> | banks_cnabsCreateWithoutBanksInput[] | banks_cnabsUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: banks_cnabsCreateOrConnectWithoutBanksInput | banks_cnabsCreateOrConnectWithoutBanksInput[]
    upsert?: banks_cnabsUpsertWithWhereUniqueWithoutBanksInput | banks_cnabsUpsertWithWhereUniqueWithoutBanksInput[]
    createMany?: banks_cnabsCreateManyBanksInputEnvelope
    set?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    disconnect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    delete?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    connect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    update?: banks_cnabsUpdateWithWhereUniqueWithoutBanksInput | banks_cnabsUpdateWithWhereUniqueWithoutBanksInput[]
    updateMany?: banks_cnabsUpdateManyWithWhereWithoutBanksInput | banks_cnabsUpdateManyWithWhereWithoutBanksInput[]
    deleteMany?: banks_cnabsScalarWhereInput | banks_cnabsScalarWhereInput[]
  }

  export type banks_productsUpdateManyWithoutBanksNestedInput = {
    create?: XOR<banks_productsCreateWithoutBanksInput, banks_productsUncheckedCreateWithoutBanksInput> | banks_productsCreateWithoutBanksInput[] | banks_productsUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: banks_productsCreateOrConnectWithoutBanksInput | banks_productsCreateOrConnectWithoutBanksInput[]
    upsert?: banks_productsUpsertWithWhereUniqueWithoutBanksInput | banks_productsUpsertWithWhereUniqueWithoutBanksInput[]
    createMany?: banks_productsCreateManyBanksInputEnvelope
    set?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    disconnect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    delete?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    connect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    update?: banks_productsUpdateWithWhereUniqueWithoutBanksInput | banks_productsUpdateWithWhereUniqueWithoutBanksInput[]
    updateMany?: banks_productsUpdateManyWithWhereWithoutBanksInput | banks_productsUpdateManyWithWhereWithoutBanksInput[]
    deleteMany?: banks_productsScalarWhereInput | banks_productsScalarWhereInput[]
  }

  export type authorization_lettersUncheckedUpdateManyWithoutBanksNestedInput = {
    create?: XOR<authorization_lettersCreateWithoutBanksInput, authorization_lettersUncheckedCreateWithoutBanksInput> | authorization_lettersCreateWithoutBanksInput[] | authorization_lettersUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: authorization_lettersCreateOrConnectWithoutBanksInput | authorization_lettersCreateOrConnectWithoutBanksInput[]
    upsert?: authorization_lettersUpsertWithWhereUniqueWithoutBanksInput | authorization_lettersUpsertWithWhereUniqueWithoutBanksInput[]
    createMany?: authorization_lettersCreateManyBanksInputEnvelope
    set?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    disconnect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    delete?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    connect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    update?: authorization_lettersUpdateWithWhereUniqueWithoutBanksInput | authorization_lettersUpdateWithWhereUniqueWithoutBanksInput[]
    updateMany?: authorization_lettersUpdateManyWithWhereWithoutBanksInput | authorization_lettersUpdateManyWithWhereWithoutBanksInput[]
    deleteMany?: authorization_lettersScalarWhereInput | authorization_lettersScalarWhereInput[]
  }

  export type banks_cnabsUncheckedUpdateManyWithoutBanksNestedInput = {
    create?: XOR<banks_cnabsCreateWithoutBanksInput, banks_cnabsUncheckedCreateWithoutBanksInput> | banks_cnabsCreateWithoutBanksInput[] | banks_cnabsUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: banks_cnabsCreateOrConnectWithoutBanksInput | banks_cnabsCreateOrConnectWithoutBanksInput[]
    upsert?: banks_cnabsUpsertWithWhereUniqueWithoutBanksInput | banks_cnabsUpsertWithWhereUniqueWithoutBanksInput[]
    createMany?: banks_cnabsCreateManyBanksInputEnvelope
    set?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    disconnect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    delete?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    connect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    update?: banks_cnabsUpdateWithWhereUniqueWithoutBanksInput | banks_cnabsUpdateWithWhereUniqueWithoutBanksInput[]
    updateMany?: banks_cnabsUpdateManyWithWhereWithoutBanksInput | banks_cnabsUpdateManyWithWhereWithoutBanksInput[]
    deleteMany?: banks_cnabsScalarWhereInput | banks_cnabsScalarWhereInput[]
  }

  export type banks_productsUncheckedUpdateManyWithoutBanksNestedInput = {
    create?: XOR<banks_productsCreateWithoutBanksInput, banks_productsUncheckedCreateWithoutBanksInput> | banks_productsCreateWithoutBanksInput[] | banks_productsUncheckedCreateWithoutBanksInput[]
    connectOrCreate?: banks_productsCreateOrConnectWithoutBanksInput | banks_productsCreateOrConnectWithoutBanksInput[]
    upsert?: banks_productsUpsertWithWhereUniqueWithoutBanksInput | banks_productsUpsertWithWhereUniqueWithoutBanksInput[]
    createMany?: banks_productsCreateManyBanksInputEnvelope
    set?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    disconnect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    delete?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    connect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    update?: banks_productsUpdateWithWhereUniqueWithoutBanksInput | banks_productsUpdateWithWhereUniqueWithoutBanksInput[]
    updateMany?: banks_productsUpdateManyWithWhereWithoutBanksInput | banks_productsUpdateManyWithWhereWithoutBanksInput[]
    deleteMany?: banks_productsScalarWhereInput | banks_productsScalarWhereInput[]
  }

  export type banksCreateNestedOneWithoutBanks_cnabsInput = {
    create?: XOR<banksCreateWithoutBanks_cnabsInput, banksUncheckedCreateWithoutBanks_cnabsInput>
    connectOrCreate?: banksCreateOrConnectWithoutBanks_cnabsInput
    connect?: banksWhereUniqueInput
  }

  export type cnabsCreateNestedOneWithoutBanks_cnabsInput = {
    create?: XOR<cnabsCreateWithoutBanks_cnabsInput, cnabsUncheckedCreateWithoutBanks_cnabsInput>
    connectOrCreate?: cnabsCreateOrConnectWithoutBanks_cnabsInput
    connect?: cnabsWhereUniqueInput
  }

  export type banksUpdateOneRequiredWithoutBanks_cnabsNestedInput = {
    create?: XOR<banksCreateWithoutBanks_cnabsInput, banksUncheckedCreateWithoutBanks_cnabsInput>
    connectOrCreate?: banksCreateOrConnectWithoutBanks_cnabsInput
    upsert?: banksUpsertWithoutBanks_cnabsInput
    connect?: banksWhereUniqueInput
    update?: XOR<XOR<banksUpdateToOneWithWhereWithoutBanks_cnabsInput, banksUpdateWithoutBanks_cnabsInput>, banksUncheckedUpdateWithoutBanks_cnabsInput>
  }

  export type cnabsUpdateOneRequiredWithoutBanks_cnabsNestedInput = {
    create?: XOR<cnabsCreateWithoutBanks_cnabsInput, cnabsUncheckedCreateWithoutBanks_cnabsInput>
    connectOrCreate?: cnabsCreateOrConnectWithoutBanks_cnabsInput
    upsert?: cnabsUpsertWithoutBanks_cnabsInput
    connect?: cnabsWhereUniqueInput
    update?: XOR<XOR<cnabsUpdateToOneWithWhereWithoutBanks_cnabsInput, cnabsUpdateWithoutBanks_cnabsInput>, cnabsUncheckedUpdateWithoutBanks_cnabsInput>
  }

  export type banksCreateNestedOneWithoutBanks_productsInput = {
    create?: XOR<banksCreateWithoutBanks_productsInput, banksUncheckedCreateWithoutBanks_productsInput>
    connectOrCreate?: banksCreateOrConnectWithoutBanks_productsInput
    connect?: banksWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutBanks_productsInput = {
    create?: XOR<productsCreateWithoutBanks_productsInput, productsUncheckedCreateWithoutBanks_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutBanks_productsInput
    connect?: productsWhereUniqueInput
  }

  export type banksUpdateOneRequiredWithoutBanks_productsNestedInput = {
    create?: XOR<banksCreateWithoutBanks_productsInput, banksUncheckedCreateWithoutBanks_productsInput>
    connectOrCreate?: banksCreateOrConnectWithoutBanks_productsInput
    upsert?: banksUpsertWithoutBanks_productsInput
    connect?: banksWhereUniqueInput
    update?: XOR<XOR<banksUpdateToOneWithWhereWithoutBanks_productsInput, banksUpdateWithoutBanks_productsInput>, banksUncheckedUpdateWithoutBanks_productsInput>
  }

  export type productsUpdateOneRequiredWithoutBanks_productsNestedInput = {
    create?: XOR<productsCreateWithoutBanks_productsInput, productsUncheckedCreateWithoutBanks_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutBanks_productsInput
    upsert?: productsUpsertWithoutBanks_productsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutBanks_productsInput, productsUpdateWithoutBanks_productsInput>, productsUncheckedUpdateWithoutBanks_productsInput>
  }

  export type authorization_lettersCreateNestedManyWithoutCnabsInput = {
    create?: XOR<authorization_lettersCreateWithoutCnabsInput, authorization_lettersUncheckedCreateWithoutCnabsInput> | authorization_lettersCreateWithoutCnabsInput[] | authorization_lettersUncheckedCreateWithoutCnabsInput[]
    connectOrCreate?: authorization_lettersCreateOrConnectWithoutCnabsInput | authorization_lettersCreateOrConnectWithoutCnabsInput[]
    createMany?: authorization_lettersCreateManyCnabsInputEnvelope
    connect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
  }

  export type banks_cnabsCreateNestedManyWithoutCnabsInput = {
    create?: XOR<banks_cnabsCreateWithoutCnabsInput, banks_cnabsUncheckedCreateWithoutCnabsInput> | banks_cnabsCreateWithoutCnabsInput[] | banks_cnabsUncheckedCreateWithoutCnabsInput[]
    connectOrCreate?: banks_cnabsCreateOrConnectWithoutCnabsInput | banks_cnabsCreateOrConnectWithoutCnabsInput[]
    createMany?: banks_cnabsCreateManyCnabsInputEnvelope
    connect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
  }

  export type authorization_lettersUncheckedCreateNestedManyWithoutCnabsInput = {
    create?: XOR<authorization_lettersCreateWithoutCnabsInput, authorization_lettersUncheckedCreateWithoutCnabsInput> | authorization_lettersCreateWithoutCnabsInput[] | authorization_lettersUncheckedCreateWithoutCnabsInput[]
    connectOrCreate?: authorization_lettersCreateOrConnectWithoutCnabsInput | authorization_lettersCreateOrConnectWithoutCnabsInput[]
    createMany?: authorization_lettersCreateManyCnabsInputEnvelope
    connect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
  }

  export type banks_cnabsUncheckedCreateNestedManyWithoutCnabsInput = {
    create?: XOR<banks_cnabsCreateWithoutCnabsInput, banks_cnabsUncheckedCreateWithoutCnabsInput> | banks_cnabsCreateWithoutCnabsInput[] | banks_cnabsUncheckedCreateWithoutCnabsInput[]
    connectOrCreate?: banks_cnabsCreateOrConnectWithoutCnabsInput | banks_cnabsCreateOrConnectWithoutCnabsInput[]
    createMany?: banks_cnabsCreateManyCnabsInputEnvelope
    connect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
  }

  export type authorization_lettersUpdateManyWithoutCnabsNestedInput = {
    create?: XOR<authorization_lettersCreateWithoutCnabsInput, authorization_lettersUncheckedCreateWithoutCnabsInput> | authorization_lettersCreateWithoutCnabsInput[] | authorization_lettersUncheckedCreateWithoutCnabsInput[]
    connectOrCreate?: authorization_lettersCreateOrConnectWithoutCnabsInput | authorization_lettersCreateOrConnectWithoutCnabsInput[]
    upsert?: authorization_lettersUpsertWithWhereUniqueWithoutCnabsInput | authorization_lettersUpsertWithWhereUniqueWithoutCnabsInput[]
    createMany?: authorization_lettersCreateManyCnabsInputEnvelope
    set?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    disconnect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    delete?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    connect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    update?: authorization_lettersUpdateWithWhereUniqueWithoutCnabsInput | authorization_lettersUpdateWithWhereUniqueWithoutCnabsInput[]
    updateMany?: authorization_lettersUpdateManyWithWhereWithoutCnabsInput | authorization_lettersUpdateManyWithWhereWithoutCnabsInput[]
    deleteMany?: authorization_lettersScalarWhereInput | authorization_lettersScalarWhereInput[]
  }

  export type banks_cnabsUpdateManyWithoutCnabsNestedInput = {
    create?: XOR<banks_cnabsCreateWithoutCnabsInput, banks_cnabsUncheckedCreateWithoutCnabsInput> | banks_cnabsCreateWithoutCnabsInput[] | banks_cnabsUncheckedCreateWithoutCnabsInput[]
    connectOrCreate?: banks_cnabsCreateOrConnectWithoutCnabsInput | banks_cnabsCreateOrConnectWithoutCnabsInput[]
    upsert?: banks_cnabsUpsertWithWhereUniqueWithoutCnabsInput | banks_cnabsUpsertWithWhereUniqueWithoutCnabsInput[]
    createMany?: banks_cnabsCreateManyCnabsInputEnvelope
    set?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    disconnect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    delete?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    connect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    update?: banks_cnabsUpdateWithWhereUniqueWithoutCnabsInput | banks_cnabsUpdateWithWhereUniqueWithoutCnabsInput[]
    updateMany?: banks_cnabsUpdateManyWithWhereWithoutCnabsInput | banks_cnabsUpdateManyWithWhereWithoutCnabsInput[]
    deleteMany?: banks_cnabsScalarWhereInput | banks_cnabsScalarWhereInput[]
  }

  export type authorization_lettersUncheckedUpdateManyWithoutCnabsNestedInput = {
    create?: XOR<authorization_lettersCreateWithoutCnabsInput, authorization_lettersUncheckedCreateWithoutCnabsInput> | authorization_lettersCreateWithoutCnabsInput[] | authorization_lettersUncheckedCreateWithoutCnabsInput[]
    connectOrCreate?: authorization_lettersCreateOrConnectWithoutCnabsInput | authorization_lettersCreateOrConnectWithoutCnabsInput[]
    upsert?: authorization_lettersUpsertWithWhereUniqueWithoutCnabsInput | authorization_lettersUpsertWithWhereUniqueWithoutCnabsInput[]
    createMany?: authorization_lettersCreateManyCnabsInputEnvelope
    set?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    disconnect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    delete?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    connect?: authorization_lettersWhereUniqueInput | authorization_lettersWhereUniqueInput[]
    update?: authorization_lettersUpdateWithWhereUniqueWithoutCnabsInput | authorization_lettersUpdateWithWhereUniqueWithoutCnabsInput[]
    updateMany?: authorization_lettersUpdateManyWithWhereWithoutCnabsInput | authorization_lettersUpdateManyWithWhereWithoutCnabsInput[]
    deleteMany?: authorization_lettersScalarWhereInput | authorization_lettersScalarWhereInput[]
  }

  export type banks_cnabsUncheckedUpdateManyWithoutCnabsNestedInput = {
    create?: XOR<banks_cnabsCreateWithoutCnabsInput, banks_cnabsUncheckedCreateWithoutCnabsInput> | banks_cnabsCreateWithoutCnabsInput[] | banks_cnabsUncheckedCreateWithoutCnabsInput[]
    connectOrCreate?: banks_cnabsCreateOrConnectWithoutCnabsInput | banks_cnabsCreateOrConnectWithoutCnabsInput[]
    upsert?: banks_cnabsUpsertWithWhereUniqueWithoutCnabsInput | banks_cnabsUpsertWithWhereUniqueWithoutCnabsInput[]
    createMany?: banks_cnabsCreateManyCnabsInputEnvelope
    set?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    disconnect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    delete?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    connect?: banks_cnabsWhereUniqueInput | banks_cnabsWhereUniqueInput[]
    update?: banks_cnabsUpdateWithWhereUniqueWithoutCnabsInput | banks_cnabsUpdateWithWhereUniqueWithoutCnabsInput[]
    updateMany?: banks_cnabsUpdateManyWithWhereWithoutCnabsInput | banks_cnabsUpdateManyWithWhereWithoutCnabsInput[]
    deleteMany?: banks_cnabsScalarWhereInput | banks_cnabsScalarWhereInput[]
  }

  export type authorization_letters_productsCreateNestedManyWithoutProductsInput = {
    create?: XOR<authorization_letters_productsCreateWithoutProductsInput, authorization_letters_productsUncheckedCreateWithoutProductsInput> | authorization_letters_productsCreateWithoutProductsInput[] | authorization_letters_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: authorization_letters_productsCreateOrConnectWithoutProductsInput | authorization_letters_productsCreateOrConnectWithoutProductsInput[]
    createMany?: authorization_letters_productsCreateManyProductsInputEnvelope
    connect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
  }

  export type banks_productsCreateNestedManyWithoutProductsInput = {
    create?: XOR<banks_productsCreateWithoutProductsInput, banks_productsUncheckedCreateWithoutProductsInput> | banks_productsCreateWithoutProductsInput[] | banks_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: banks_productsCreateOrConnectWithoutProductsInput | banks_productsCreateOrConnectWithoutProductsInput[]
    createMany?: banks_productsCreateManyProductsInputEnvelope
    connect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
  }

  export type authorization_letters_productsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<authorization_letters_productsCreateWithoutProductsInput, authorization_letters_productsUncheckedCreateWithoutProductsInput> | authorization_letters_productsCreateWithoutProductsInput[] | authorization_letters_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: authorization_letters_productsCreateOrConnectWithoutProductsInput | authorization_letters_productsCreateOrConnectWithoutProductsInput[]
    createMany?: authorization_letters_productsCreateManyProductsInputEnvelope
    connect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
  }

  export type banks_productsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<banks_productsCreateWithoutProductsInput, banks_productsUncheckedCreateWithoutProductsInput> | banks_productsCreateWithoutProductsInput[] | banks_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: banks_productsCreateOrConnectWithoutProductsInput | banks_productsCreateOrConnectWithoutProductsInput[]
    createMany?: banks_productsCreateManyProductsInputEnvelope
    connect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
  }

  export type authorization_letters_productsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<authorization_letters_productsCreateWithoutProductsInput, authorization_letters_productsUncheckedCreateWithoutProductsInput> | authorization_letters_productsCreateWithoutProductsInput[] | authorization_letters_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: authorization_letters_productsCreateOrConnectWithoutProductsInput | authorization_letters_productsCreateOrConnectWithoutProductsInput[]
    upsert?: authorization_letters_productsUpsertWithWhereUniqueWithoutProductsInput | authorization_letters_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: authorization_letters_productsCreateManyProductsInputEnvelope
    set?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    disconnect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    delete?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    connect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    update?: authorization_letters_productsUpdateWithWhereUniqueWithoutProductsInput | authorization_letters_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: authorization_letters_productsUpdateManyWithWhereWithoutProductsInput | authorization_letters_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: authorization_letters_productsScalarWhereInput | authorization_letters_productsScalarWhereInput[]
  }

  export type banks_productsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<banks_productsCreateWithoutProductsInput, banks_productsUncheckedCreateWithoutProductsInput> | banks_productsCreateWithoutProductsInput[] | banks_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: banks_productsCreateOrConnectWithoutProductsInput | banks_productsCreateOrConnectWithoutProductsInput[]
    upsert?: banks_productsUpsertWithWhereUniqueWithoutProductsInput | banks_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: banks_productsCreateManyProductsInputEnvelope
    set?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    disconnect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    delete?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    connect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    update?: banks_productsUpdateWithWhereUniqueWithoutProductsInput | banks_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: banks_productsUpdateManyWithWhereWithoutProductsInput | banks_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: banks_productsScalarWhereInput | banks_productsScalarWhereInput[]
  }

  export type authorization_letters_productsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<authorization_letters_productsCreateWithoutProductsInput, authorization_letters_productsUncheckedCreateWithoutProductsInput> | authorization_letters_productsCreateWithoutProductsInput[] | authorization_letters_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: authorization_letters_productsCreateOrConnectWithoutProductsInput | authorization_letters_productsCreateOrConnectWithoutProductsInput[]
    upsert?: authorization_letters_productsUpsertWithWhereUniqueWithoutProductsInput | authorization_letters_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: authorization_letters_productsCreateManyProductsInputEnvelope
    set?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    disconnect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    delete?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    connect?: authorization_letters_productsWhereUniqueInput | authorization_letters_productsWhereUniqueInput[]
    update?: authorization_letters_productsUpdateWithWhereUniqueWithoutProductsInput | authorization_letters_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: authorization_letters_productsUpdateManyWithWhereWithoutProductsInput | authorization_letters_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: authorization_letters_productsScalarWhereInput | authorization_letters_productsScalarWhereInput[]
  }

  export type banks_productsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<banks_productsCreateWithoutProductsInput, banks_productsUncheckedCreateWithoutProductsInput> | banks_productsCreateWithoutProductsInput[] | banks_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: banks_productsCreateOrConnectWithoutProductsInput | banks_productsCreateOrConnectWithoutProductsInput[]
    upsert?: banks_productsUpsertWithWhereUniqueWithoutProductsInput | banks_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: banks_productsCreateManyProductsInputEnvelope
    set?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    disconnect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    delete?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    connect?: banks_productsWhereUniqueInput | banks_productsWhereUniqueInput[]
    update?: banks_productsUpdateWithWhereUniqueWithoutProductsInput | banks_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: banks_productsUpdateManyWithWhereWithoutProductsInput | banks_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: banks_productsScalarWhereInput | banks_productsScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type banksCreateWithoutAuthorization_lettersInput = {
    name: string
    code: string
    banks_cnabs?: banks_cnabsCreateNestedManyWithoutBanksInput
    banks_products?: banks_productsCreateNestedManyWithoutBanksInput
  }

  export type banksUncheckedCreateWithoutAuthorization_lettersInput = {
    id?: number
    name: string
    code: string
    banks_cnabs?: banks_cnabsUncheckedCreateNestedManyWithoutBanksInput
    banks_products?: banks_productsUncheckedCreateNestedManyWithoutBanksInput
  }

  export type banksCreateOrConnectWithoutAuthorization_lettersInput = {
    where: banksWhereUniqueInput
    create: XOR<banksCreateWithoutAuthorization_lettersInput, banksUncheckedCreateWithoutAuthorization_lettersInput>
  }

  export type cnabsCreateWithoutAuthorization_lettersInput = {
    name: string
    banks_cnabs?: banks_cnabsCreateNestedManyWithoutCnabsInput
  }

  export type cnabsUncheckedCreateWithoutAuthorization_lettersInput = {
    id?: number
    name: string
    banks_cnabs?: banks_cnabsUncheckedCreateNestedManyWithoutCnabsInput
  }

  export type cnabsCreateOrConnectWithoutAuthorization_lettersInput = {
    where: cnabsWhereUniqueInput
    create: XOR<cnabsCreateWithoutAuthorization_lettersInput, cnabsUncheckedCreateWithoutAuthorization_lettersInput>
  }

  export type authorization_letters_productsCreateWithoutAuthorization_lettersInput = {
    id?: bigint | number
    products: productsCreateNestedOneWithoutAuthorization_letters_productsInput
  }

  export type authorization_letters_productsUncheckedCreateWithoutAuthorization_lettersInput = {
    id?: bigint | number
    id_products: bigint | number
  }

  export type authorization_letters_productsCreateOrConnectWithoutAuthorization_lettersInput = {
    where: authorization_letters_productsWhereUniqueInput
    create: XOR<authorization_letters_productsCreateWithoutAuthorization_lettersInput, authorization_letters_productsUncheckedCreateWithoutAuthorization_lettersInput>
  }

  export type authorization_letters_productsCreateManyAuthorization_lettersInputEnvelope = {
    data: authorization_letters_productsCreateManyAuthorization_lettersInput | authorization_letters_productsCreateManyAuthorization_lettersInput[]
    skipDuplicates?: boolean
  }

  export type banksUpsertWithoutAuthorization_lettersInput = {
    update: XOR<banksUpdateWithoutAuthorization_lettersInput, banksUncheckedUpdateWithoutAuthorization_lettersInput>
    create: XOR<banksCreateWithoutAuthorization_lettersInput, banksUncheckedCreateWithoutAuthorization_lettersInput>
    where?: banksWhereInput
  }

  export type banksUpdateToOneWithWhereWithoutAuthorization_lettersInput = {
    where?: banksWhereInput
    data: XOR<banksUpdateWithoutAuthorization_lettersInput, banksUncheckedUpdateWithoutAuthorization_lettersInput>
  }

  export type banksUpdateWithoutAuthorization_lettersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    banks_cnabs?: banks_cnabsUpdateManyWithoutBanksNestedInput
    banks_products?: banks_productsUpdateManyWithoutBanksNestedInput
  }

  export type banksUncheckedUpdateWithoutAuthorization_lettersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    banks_cnabs?: banks_cnabsUncheckedUpdateManyWithoutBanksNestedInput
    banks_products?: banks_productsUncheckedUpdateManyWithoutBanksNestedInput
  }

  export type cnabsUpsertWithoutAuthorization_lettersInput = {
    update: XOR<cnabsUpdateWithoutAuthorization_lettersInput, cnabsUncheckedUpdateWithoutAuthorization_lettersInput>
    create: XOR<cnabsCreateWithoutAuthorization_lettersInput, cnabsUncheckedCreateWithoutAuthorization_lettersInput>
    where?: cnabsWhereInput
  }

  export type cnabsUpdateToOneWithWhereWithoutAuthorization_lettersInput = {
    where?: cnabsWhereInput
    data: XOR<cnabsUpdateWithoutAuthorization_lettersInput, cnabsUncheckedUpdateWithoutAuthorization_lettersInput>
  }

  export type cnabsUpdateWithoutAuthorization_lettersInput = {
    name?: StringFieldUpdateOperationsInput | string
    banks_cnabs?: banks_cnabsUpdateManyWithoutCnabsNestedInput
  }

  export type cnabsUncheckedUpdateWithoutAuthorization_lettersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    banks_cnabs?: banks_cnabsUncheckedUpdateManyWithoutCnabsNestedInput
  }

  export type authorization_letters_productsUpsertWithWhereUniqueWithoutAuthorization_lettersInput = {
    where: authorization_letters_productsWhereUniqueInput
    update: XOR<authorization_letters_productsUpdateWithoutAuthorization_lettersInput, authorization_letters_productsUncheckedUpdateWithoutAuthorization_lettersInput>
    create: XOR<authorization_letters_productsCreateWithoutAuthorization_lettersInput, authorization_letters_productsUncheckedCreateWithoutAuthorization_lettersInput>
  }

  export type authorization_letters_productsUpdateWithWhereUniqueWithoutAuthorization_lettersInput = {
    where: authorization_letters_productsWhereUniqueInput
    data: XOR<authorization_letters_productsUpdateWithoutAuthorization_lettersInput, authorization_letters_productsUncheckedUpdateWithoutAuthorization_lettersInput>
  }

  export type authorization_letters_productsUpdateManyWithWhereWithoutAuthorization_lettersInput = {
    where: authorization_letters_productsScalarWhereInput
    data: XOR<authorization_letters_productsUpdateManyMutationInput, authorization_letters_productsUncheckedUpdateManyWithoutAuthorization_lettersInput>
  }

  export type authorization_letters_productsScalarWhereInput = {
    AND?: authorization_letters_productsScalarWhereInput | authorization_letters_productsScalarWhereInput[]
    OR?: authorization_letters_productsScalarWhereInput[]
    NOT?: authorization_letters_productsScalarWhereInput | authorization_letters_productsScalarWhereInput[]
    id?: BigIntFilter<"authorization_letters_products"> | bigint | number
    id_products?: BigIntFilter<"authorization_letters_products"> | bigint | number
    id_authorization_letters?: BigIntFilter<"authorization_letters_products"> | bigint | number
  }

  export type authorization_lettersCreateWithoutAuthorization_letters_productsInput = {
    id?: bigint | number
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    created_at: Date | string
    banks: banksCreateNestedOneWithoutAuthorization_lettersInput
    cnabs: cnabsCreateNestedOneWithoutAuthorization_lettersInput
  }

  export type authorization_lettersUncheckedCreateWithoutAuthorization_letters_productsInput = {
    id?: bigint | number
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    id_banks: number
    id_cnabs: number
    created_at: Date | string
  }

  export type authorization_lettersCreateOrConnectWithoutAuthorization_letters_productsInput = {
    where: authorization_lettersWhereUniqueInput
    create: XOR<authorization_lettersCreateWithoutAuthorization_letters_productsInput, authorization_lettersUncheckedCreateWithoutAuthorization_letters_productsInput>
  }

  export type productsCreateWithoutAuthorization_letters_productsInput = {
    id?: bigint | number
    name: string
    banks_products?: banks_productsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutAuthorization_letters_productsInput = {
    id?: bigint | number
    name: string
    banks_products?: banks_productsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutAuthorization_letters_productsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutAuthorization_letters_productsInput, productsUncheckedCreateWithoutAuthorization_letters_productsInput>
  }

  export type authorization_lettersUpsertWithoutAuthorization_letters_productsInput = {
    update: XOR<authorization_lettersUpdateWithoutAuthorization_letters_productsInput, authorization_lettersUncheckedUpdateWithoutAuthorization_letters_productsInput>
    create: XOR<authorization_lettersCreateWithoutAuthorization_letters_productsInput, authorization_lettersUncheckedCreateWithoutAuthorization_letters_productsInput>
    where?: authorization_lettersWhereInput
  }

  export type authorization_lettersUpdateToOneWithWhereWithoutAuthorization_letters_productsInput = {
    where?: authorization_lettersWhereInput
    data: XOR<authorization_lettersUpdateWithoutAuthorization_letters_productsInput, authorization_lettersUncheckedUpdateWithoutAuthorization_letters_productsInput>
  }

  export type authorization_lettersUpdateWithoutAuthorization_letters_productsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    banks?: banksUpdateOneRequiredWithoutAuthorization_lettersNestedInput
    cnabs?: cnabsUpdateOneRequiredWithoutAuthorization_lettersNestedInput
  }

  export type authorization_lettersUncheckedUpdateWithoutAuthorization_letters_productsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    id_banks?: IntFieldUpdateOperationsInput | number
    id_cnabs?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUpsertWithoutAuthorization_letters_productsInput = {
    update: XOR<productsUpdateWithoutAuthorization_letters_productsInput, productsUncheckedUpdateWithoutAuthorization_letters_productsInput>
    create: XOR<productsCreateWithoutAuthorization_letters_productsInput, productsUncheckedCreateWithoutAuthorization_letters_productsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutAuthorization_letters_productsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutAuthorization_letters_productsInput, productsUncheckedUpdateWithoutAuthorization_letters_productsInput>
  }

  export type productsUpdateWithoutAuthorization_letters_productsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    banks_products?: banks_productsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutAuthorization_letters_productsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    banks_products?: banks_productsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type authorization_lettersCreateWithoutBanksInput = {
    id?: bigint | number
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    created_at: Date | string
    cnabs: cnabsCreateNestedOneWithoutAuthorization_lettersInput
    authorization_letters_products?: authorization_letters_productsCreateNestedManyWithoutAuthorization_lettersInput
  }

  export type authorization_lettersUncheckedCreateWithoutBanksInput = {
    id?: bigint | number
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    id_cnabs: number
    created_at: Date | string
    authorization_letters_products?: authorization_letters_productsUncheckedCreateNestedManyWithoutAuthorization_lettersInput
  }

  export type authorization_lettersCreateOrConnectWithoutBanksInput = {
    where: authorization_lettersWhereUniqueInput
    create: XOR<authorization_lettersCreateWithoutBanksInput, authorization_lettersUncheckedCreateWithoutBanksInput>
  }

  export type authorization_lettersCreateManyBanksInputEnvelope = {
    data: authorization_lettersCreateManyBanksInput | authorization_lettersCreateManyBanksInput[]
    skipDuplicates?: boolean
  }

  export type banks_cnabsCreateWithoutBanksInput = {
    id?: bigint | number
    cnabs: cnabsCreateNestedOneWithoutBanks_cnabsInput
  }

  export type banks_cnabsUncheckedCreateWithoutBanksInput = {
    id?: bigint | number
    id_cnabs: number
  }

  export type banks_cnabsCreateOrConnectWithoutBanksInput = {
    where: banks_cnabsWhereUniqueInput
    create: XOR<banks_cnabsCreateWithoutBanksInput, banks_cnabsUncheckedCreateWithoutBanksInput>
  }

  export type banks_cnabsCreateManyBanksInputEnvelope = {
    data: banks_cnabsCreateManyBanksInput | banks_cnabsCreateManyBanksInput[]
    skipDuplicates?: boolean
  }

  export type banks_productsCreateWithoutBanksInput = {
    id?: bigint | number
    products: productsCreateNestedOneWithoutBanks_productsInput
  }

  export type banks_productsUncheckedCreateWithoutBanksInput = {
    id?: bigint | number
    id_products: bigint | number
  }

  export type banks_productsCreateOrConnectWithoutBanksInput = {
    where: banks_productsWhereUniqueInput
    create: XOR<banks_productsCreateWithoutBanksInput, banks_productsUncheckedCreateWithoutBanksInput>
  }

  export type banks_productsCreateManyBanksInputEnvelope = {
    data: banks_productsCreateManyBanksInput | banks_productsCreateManyBanksInput[]
    skipDuplicates?: boolean
  }

  export type authorization_lettersUpsertWithWhereUniqueWithoutBanksInput = {
    where: authorization_lettersWhereUniqueInput
    update: XOR<authorization_lettersUpdateWithoutBanksInput, authorization_lettersUncheckedUpdateWithoutBanksInput>
    create: XOR<authorization_lettersCreateWithoutBanksInput, authorization_lettersUncheckedCreateWithoutBanksInput>
  }

  export type authorization_lettersUpdateWithWhereUniqueWithoutBanksInput = {
    where: authorization_lettersWhereUniqueInput
    data: XOR<authorization_lettersUpdateWithoutBanksInput, authorization_lettersUncheckedUpdateWithoutBanksInput>
  }

  export type authorization_lettersUpdateManyWithWhereWithoutBanksInput = {
    where: authorization_lettersScalarWhereInput
    data: XOR<authorization_lettersUpdateManyMutationInput, authorization_lettersUncheckedUpdateManyWithoutBanksInput>
  }

  export type authorization_lettersScalarWhereInput = {
    AND?: authorization_lettersScalarWhereInput | authorization_lettersScalarWhereInput[]
    OR?: authorization_lettersScalarWhereInput[]
    NOT?: authorization_lettersScalarWhereInput | authorization_lettersScalarWhereInput[]
    id?: BigIntFilter<"authorization_letters"> | bigint | number
    cnpj?: StringFilter<"authorization_letters"> | string
    corporate_name?: StringFilter<"authorization_letters"> | string
    responsible_person_name?: StringFilter<"authorization_letters"> | string
    responsible_person_title?: StringFilter<"authorization_letters"> | string
    responsible_person_cellphone?: StringFilter<"authorization_letters"> | string
    responsible_person_email?: StringFilter<"authorization_letters"> | string
    manager_name?: StringFilter<"authorization_letters"> | string
    manager_cellphone?: StringFilter<"authorization_letters"> | string
    manager_email?: StringFilter<"authorization_letters"> | string
    branch_number?: StringFilter<"authorization_letters"> | string
    branch_dv?: StringFilter<"authorization_letters"> | string
    account_number?: StringFilter<"authorization_letters"> | string
    account_dv?: StringFilter<"authorization_letters"> | string
    agreement_number?: StringFilter<"authorization_letters"> | string
    id_banks?: IntFilter<"authorization_letters"> | number
    id_cnabs?: IntFilter<"authorization_letters"> | number
    created_at?: DateTimeFilter<"authorization_letters"> | Date | string
  }

  export type banks_cnabsUpsertWithWhereUniqueWithoutBanksInput = {
    where: banks_cnabsWhereUniqueInput
    update: XOR<banks_cnabsUpdateWithoutBanksInput, banks_cnabsUncheckedUpdateWithoutBanksInput>
    create: XOR<banks_cnabsCreateWithoutBanksInput, banks_cnabsUncheckedCreateWithoutBanksInput>
  }

  export type banks_cnabsUpdateWithWhereUniqueWithoutBanksInput = {
    where: banks_cnabsWhereUniqueInput
    data: XOR<banks_cnabsUpdateWithoutBanksInput, banks_cnabsUncheckedUpdateWithoutBanksInput>
  }

  export type banks_cnabsUpdateManyWithWhereWithoutBanksInput = {
    where: banks_cnabsScalarWhereInput
    data: XOR<banks_cnabsUpdateManyMutationInput, banks_cnabsUncheckedUpdateManyWithoutBanksInput>
  }

  export type banks_cnabsScalarWhereInput = {
    AND?: banks_cnabsScalarWhereInput | banks_cnabsScalarWhereInput[]
    OR?: banks_cnabsScalarWhereInput[]
    NOT?: banks_cnabsScalarWhereInput | banks_cnabsScalarWhereInput[]
    id?: BigIntFilter<"banks_cnabs"> | bigint | number
    id_banks?: IntFilter<"banks_cnabs"> | number
    id_cnabs?: IntFilter<"banks_cnabs"> | number
  }

  export type banks_productsUpsertWithWhereUniqueWithoutBanksInput = {
    where: banks_productsWhereUniqueInput
    update: XOR<banks_productsUpdateWithoutBanksInput, banks_productsUncheckedUpdateWithoutBanksInput>
    create: XOR<banks_productsCreateWithoutBanksInput, banks_productsUncheckedCreateWithoutBanksInput>
  }

  export type banks_productsUpdateWithWhereUniqueWithoutBanksInput = {
    where: banks_productsWhereUniqueInput
    data: XOR<banks_productsUpdateWithoutBanksInput, banks_productsUncheckedUpdateWithoutBanksInput>
  }

  export type banks_productsUpdateManyWithWhereWithoutBanksInput = {
    where: banks_productsScalarWhereInput
    data: XOR<banks_productsUpdateManyMutationInput, banks_productsUncheckedUpdateManyWithoutBanksInput>
  }

  export type banks_productsScalarWhereInput = {
    AND?: banks_productsScalarWhereInput | banks_productsScalarWhereInput[]
    OR?: banks_productsScalarWhereInput[]
    NOT?: banks_productsScalarWhereInput | banks_productsScalarWhereInput[]
    id?: BigIntFilter<"banks_products"> | bigint | number
    id_products?: BigIntFilter<"banks_products"> | bigint | number
    id_banks?: IntFilter<"banks_products"> | number
  }

  export type banksCreateWithoutBanks_cnabsInput = {
    name: string
    code: string
    authorization_letters?: authorization_lettersCreateNestedManyWithoutBanksInput
    banks_products?: banks_productsCreateNestedManyWithoutBanksInput
  }

  export type banksUncheckedCreateWithoutBanks_cnabsInput = {
    id?: number
    name: string
    code: string
    authorization_letters?: authorization_lettersUncheckedCreateNestedManyWithoutBanksInput
    banks_products?: banks_productsUncheckedCreateNestedManyWithoutBanksInput
  }

  export type banksCreateOrConnectWithoutBanks_cnabsInput = {
    where: banksWhereUniqueInput
    create: XOR<banksCreateWithoutBanks_cnabsInput, banksUncheckedCreateWithoutBanks_cnabsInput>
  }

  export type cnabsCreateWithoutBanks_cnabsInput = {
    name: string
    authorization_letters?: authorization_lettersCreateNestedManyWithoutCnabsInput
  }

  export type cnabsUncheckedCreateWithoutBanks_cnabsInput = {
    id?: number
    name: string
    authorization_letters?: authorization_lettersUncheckedCreateNestedManyWithoutCnabsInput
  }

  export type cnabsCreateOrConnectWithoutBanks_cnabsInput = {
    where: cnabsWhereUniqueInput
    create: XOR<cnabsCreateWithoutBanks_cnabsInput, cnabsUncheckedCreateWithoutBanks_cnabsInput>
  }

  export type banksUpsertWithoutBanks_cnabsInput = {
    update: XOR<banksUpdateWithoutBanks_cnabsInput, banksUncheckedUpdateWithoutBanks_cnabsInput>
    create: XOR<banksCreateWithoutBanks_cnabsInput, banksUncheckedCreateWithoutBanks_cnabsInput>
    where?: banksWhereInput
  }

  export type banksUpdateToOneWithWhereWithoutBanks_cnabsInput = {
    where?: banksWhereInput
    data: XOR<banksUpdateWithoutBanks_cnabsInput, banksUncheckedUpdateWithoutBanks_cnabsInput>
  }

  export type banksUpdateWithoutBanks_cnabsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    authorization_letters?: authorization_lettersUpdateManyWithoutBanksNestedInput
    banks_products?: banks_productsUpdateManyWithoutBanksNestedInput
  }

  export type banksUncheckedUpdateWithoutBanks_cnabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    authorization_letters?: authorization_lettersUncheckedUpdateManyWithoutBanksNestedInput
    banks_products?: banks_productsUncheckedUpdateManyWithoutBanksNestedInput
  }

  export type cnabsUpsertWithoutBanks_cnabsInput = {
    update: XOR<cnabsUpdateWithoutBanks_cnabsInput, cnabsUncheckedUpdateWithoutBanks_cnabsInput>
    create: XOR<cnabsCreateWithoutBanks_cnabsInput, cnabsUncheckedCreateWithoutBanks_cnabsInput>
    where?: cnabsWhereInput
  }

  export type cnabsUpdateToOneWithWhereWithoutBanks_cnabsInput = {
    where?: cnabsWhereInput
    data: XOR<cnabsUpdateWithoutBanks_cnabsInput, cnabsUncheckedUpdateWithoutBanks_cnabsInput>
  }

  export type cnabsUpdateWithoutBanks_cnabsInput = {
    name?: StringFieldUpdateOperationsInput | string
    authorization_letters?: authorization_lettersUpdateManyWithoutCnabsNestedInput
  }

  export type cnabsUncheckedUpdateWithoutBanks_cnabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    authorization_letters?: authorization_lettersUncheckedUpdateManyWithoutCnabsNestedInput
  }

  export type banksCreateWithoutBanks_productsInput = {
    name: string
    code: string
    authorization_letters?: authorization_lettersCreateNestedManyWithoutBanksInput
    banks_cnabs?: banks_cnabsCreateNestedManyWithoutBanksInput
  }

  export type banksUncheckedCreateWithoutBanks_productsInput = {
    id?: number
    name: string
    code: string
    authorization_letters?: authorization_lettersUncheckedCreateNestedManyWithoutBanksInput
    banks_cnabs?: banks_cnabsUncheckedCreateNestedManyWithoutBanksInput
  }

  export type banksCreateOrConnectWithoutBanks_productsInput = {
    where: banksWhereUniqueInput
    create: XOR<banksCreateWithoutBanks_productsInput, banksUncheckedCreateWithoutBanks_productsInput>
  }

  export type productsCreateWithoutBanks_productsInput = {
    id?: bigint | number
    name: string
    authorization_letters_products?: authorization_letters_productsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutBanks_productsInput = {
    id?: bigint | number
    name: string
    authorization_letters_products?: authorization_letters_productsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutBanks_productsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutBanks_productsInput, productsUncheckedCreateWithoutBanks_productsInput>
  }

  export type banksUpsertWithoutBanks_productsInput = {
    update: XOR<banksUpdateWithoutBanks_productsInput, banksUncheckedUpdateWithoutBanks_productsInput>
    create: XOR<banksCreateWithoutBanks_productsInput, banksUncheckedCreateWithoutBanks_productsInput>
    where?: banksWhereInput
  }

  export type banksUpdateToOneWithWhereWithoutBanks_productsInput = {
    where?: banksWhereInput
    data: XOR<banksUpdateWithoutBanks_productsInput, banksUncheckedUpdateWithoutBanks_productsInput>
  }

  export type banksUpdateWithoutBanks_productsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    authorization_letters?: authorization_lettersUpdateManyWithoutBanksNestedInput
    banks_cnabs?: banks_cnabsUpdateManyWithoutBanksNestedInput
  }

  export type banksUncheckedUpdateWithoutBanks_productsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    authorization_letters?: authorization_lettersUncheckedUpdateManyWithoutBanksNestedInput
    banks_cnabs?: banks_cnabsUncheckedUpdateManyWithoutBanksNestedInput
  }

  export type productsUpsertWithoutBanks_productsInput = {
    update: XOR<productsUpdateWithoutBanks_productsInput, productsUncheckedUpdateWithoutBanks_productsInput>
    create: XOR<productsCreateWithoutBanks_productsInput, productsUncheckedCreateWithoutBanks_productsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutBanks_productsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutBanks_productsInput, productsUncheckedUpdateWithoutBanks_productsInput>
  }

  export type productsUpdateWithoutBanks_productsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    authorization_letters_products?: authorization_letters_productsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutBanks_productsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    authorization_letters_products?: authorization_letters_productsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type authorization_lettersCreateWithoutCnabsInput = {
    id?: bigint | number
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    created_at: Date | string
    banks: banksCreateNestedOneWithoutAuthorization_lettersInput
    authorization_letters_products?: authorization_letters_productsCreateNestedManyWithoutAuthorization_lettersInput
  }

  export type authorization_lettersUncheckedCreateWithoutCnabsInput = {
    id?: bigint | number
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    id_banks: number
    created_at: Date | string
    authorization_letters_products?: authorization_letters_productsUncheckedCreateNestedManyWithoutAuthorization_lettersInput
  }

  export type authorization_lettersCreateOrConnectWithoutCnabsInput = {
    where: authorization_lettersWhereUniqueInput
    create: XOR<authorization_lettersCreateWithoutCnabsInput, authorization_lettersUncheckedCreateWithoutCnabsInput>
  }

  export type authorization_lettersCreateManyCnabsInputEnvelope = {
    data: authorization_lettersCreateManyCnabsInput | authorization_lettersCreateManyCnabsInput[]
    skipDuplicates?: boolean
  }

  export type banks_cnabsCreateWithoutCnabsInput = {
    id?: bigint | number
    banks: banksCreateNestedOneWithoutBanks_cnabsInput
  }

  export type banks_cnabsUncheckedCreateWithoutCnabsInput = {
    id?: bigint | number
    id_banks: number
  }

  export type banks_cnabsCreateOrConnectWithoutCnabsInput = {
    where: banks_cnabsWhereUniqueInput
    create: XOR<banks_cnabsCreateWithoutCnabsInput, banks_cnabsUncheckedCreateWithoutCnabsInput>
  }

  export type banks_cnabsCreateManyCnabsInputEnvelope = {
    data: banks_cnabsCreateManyCnabsInput | banks_cnabsCreateManyCnabsInput[]
    skipDuplicates?: boolean
  }

  export type authorization_lettersUpsertWithWhereUniqueWithoutCnabsInput = {
    where: authorization_lettersWhereUniqueInput
    update: XOR<authorization_lettersUpdateWithoutCnabsInput, authorization_lettersUncheckedUpdateWithoutCnabsInput>
    create: XOR<authorization_lettersCreateWithoutCnabsInput, authorization_lettersUncheckedCreateWithoutCnabsInput>
  }

  export type authorization_lettersUpdateWithWhereUniqueWithoutCnabsInput = {
    where: authorization_lettersWhereUniqueInput
    data: XOR<authorization_lettersUpdateWithoutCnabsInput, authorization_lettersUncheckedUpdateWithoutCnabsInput>
  }

  export type authorization_lettersUpdateManyWithWhereWithoutCnabsInput = {
    where: authorization_lettersScalarWhereInput
    data: XOR<authorization_lettersUpdateManyMutationInput, authorization_lettersUncheckedUpdateManyWithoutCnabsInput>
  }

  export type banks_cnabsUpsertWithWhereUniqueWithoutCnabsInput = {
    where: banks_cnabsWhereUniqueInput
    update: XOR<banks_cnabsUpdateWithoutCnabsInput, banks_cnabsUncheckedUpdateWithoutCnabsInput>
    create: XOR<banks_cnabsCreateWithoutCnabsInput, banks_cnabsUncheckedCreateWithoutCnabsInput>
  }

  export type banks_cnabsUpdateWithWhereUniqueWithoutCnabsInput = {
    where: banks_cnabsWhereUniqueInput
    data: XOR<banks_cnabsUpdateWithoutCnabsInput, banks_cnabsUncheckedUpdateWithoutCnabsInput>
  }

  export type banks_cnabsUpdateManyWithWhereWithoutCnabsInput = {
    where: banks_cnabsScalarWhereInput
    data: XOR<banks_cnabsUpdateManyMutationInput, banks_cnabsUncheckedUpdateManyWithoutCnabsInput>
  }

  export type authorization_letters_productsCreateWithoutProductsInput = {
    id?: bigint | number
    authorization_letters: authorization_lettersCreateNestedOneWithoutAuthorization_letters_productsInput
  }

  export type authorization_letters_productsUncheckedCreateWithoutProductsInput = {
    id?: bigint | number
    id_authorization_letters: bigint | number
  }

  export type authorization_letters_productsCreateOrConnectWithoutProductsInput = {
    where: authorization_letters_productsWhereUniqueInput
    create: XOR<authorization_letters_productsCreateWithoutProductsInput, authorization_letters_productsUncheckedCreateWithoutProductsInput>
  }

  export type authorization_letters_productsCreateManyProductsInputEnvelope = {
    data: authorization_letters_productsCreateManyProductsInput | authorization_letters_productsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type banks_productsCreateWithoutProductsInput = {
    id?: bigint | number
    banks: banksCreateNestedOneWithoutBanks_productsInput
  }

  export type banks_productsUncheckedCreateWithoutProductsInput = {
    id?: bigint | number
    id_banks: number
  }

  export type banks_productsCreateOrConnectWithoutProductsInput = {
    where: banks_productsWhereUniqueInput
    create: XOR<banks_productsCreateWithoutProductsInput, banks_productsUncheckedCreateWithoutProductsInput>
  }

  export type banks_productsCreateManyProductsInputEnvelope = {
    data: banks_productsCreateManyProductsInput | banks_productsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type authorization_letters_productsUpsertWithWhereUniqueWithoutProductsInput = {
    where: authorization_letters_productsWhereUniqueInput
    update: XOR<authorization_letters_productsUpdateWithoutProductsInput, authorization_letters_productsUncheckedUpdateWithoutProductsInput>
    create: XOR<authorization_letters_productsCreateWithoutProductsInput, authorization_letters_productsUncheckedCreateWithoutProductsInput>
  }

  export type authorization_letters_productsUpdateWithWhereUniqueWithoutProductsInput = {
    where: authorization_letters_productsWhereUniqueInput
    data: XOR<authorization_letters_productsUpdateWithoutProductsInput, authorization_letters_productsUncheckedUpdateWithoutProductsInput>
  }

  export type authorization_letters_productsUpdateManyWithWhereWithoutProductsInput = {
    where: authorization_letters_productsScalarWhereInput
    data: XOR<authorization_letters_productsUpdateManyMutationInput, authorization_letters_productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type banks_productsUpsertWithWhereUniqueWithoutProductsInput = {
    where: banks_productsWhereUniqueInput
    update: XOR<banks_productsUpdateWithoutProductsInput, banks_productsUncheckedUpdateWithoutProductsInput>
    create: XOR<banks_productsCreateWithoutProductsInput, banks_productsUncheckedCreateWithoutProductsInput>
  }

  export type banks_productsUpdateWithWhereUniqueWithoutProductsInput = {
    where: banks_productsWhereUniqueInput
    data: XOR<banks_productsUpdateWithoutProductsInput, banks_productsUncheckedUpdateWithoutProductsInput>
  }

  export type banks_productsUpdateManyWithWhereWithoutProductsInput = {
    where: banks_productsScalarWhereInput
    data: XOR<banks_productsUpdateManyMutationInput, banks_productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type authorization_letters_productsCreateManyAuthorization_lettersInput = {
    id?: bigint | number
    id_products: bigint | number
  }

  export type authorization_letters_productsUpdateWithoutAuthorization_lettersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    products?: productsUpdateOneRequiredWithoutAuthorization_letters_productsNestedInput
  }

  export type authorization_letters_productsUncheckedUpdateWithoutAuthorization_lettersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_products?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type authorization_letters_productsUncheckedUpdateManyWithoutAuthorization_lettersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_products?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type authorization_lettersCreateManyBanksInput = {
    id?: bigint | number
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    id_cnabs: number
    created_at: Date | string
  }

  export type banks_cnabsCreateManyBanksInput = {
    id?: bigint | number
    id_cnabs: number
  }

  export type banks_productsCreateManyBanksInput = {
    id?: bigint | number
    id_products: bigint | number
  }

  export type authorization_lettersUpdateWithoutBanksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cnabs?: cnabsUpdateOneRequiredWithoutAuthorization_lettersNestedInput
    authorization_letters_products?: authorization_letters_productsUpdateManyWithoutAuthorization_lettersNestedInput
  }

  export type authorization_lettersUncheckedUpdateWithoutBanksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    id_cnabs?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authorization_letters_products?: authorization_letters_productsUncheckedUpdateManyWithoutAuthorization_lettersNestedInput
  }

  export type authorization_lettersUncheckedUpdateManyWithoutBanksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    id_cnabs?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type banks_cnabsUpdateWithoutBanksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnabs?: cnabsUpdateOneRequiredWithoutBanks_cnabsNestedInput
  }

  export type banks_cnabsUncheckedUpdateWithoutBanksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_cnabs?: IntFieldUpdateOperationsInput | number
  }

  export type banks_cnabsUncheckedUpdateManyWithoutBanksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_cnabs?: IntFieldUpdateOperationsInput | number
  }

  export type banks_productsUpdateWithoutBanksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    products?: productsUpdateOneRequiredWithoutBanks_productsNestedInput
  }

  export type banks_productsUncheckedUpdateWithoutBanksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_products?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type banks_productsUncheckedUpdateManyWithoutBanksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_products?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type authorization_lettersCreateManyCnabsInput = {
    id?: bigint | number
    cnpj: string
    corporate_name: string
    responsible_person_name: string
    responsible_person_title: string
    responsible_person_cellphone: string
    responsible_person_email: string
    manager_name: string
    manager_cellphone: string
    manager_email: string
    branch_number: string
    branch_dv: string
    account_number: string
    account_dv: string
    agreement_number: string
    id_banks: number
    created_at: Date | string
  }

  export type banks_cnabsCreateManyCnabsInput = {
    id?: bigint | number
    id_banks: number
  }

  export type authorization_lettersUpdateWithoutCnabsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    banks?: banksUpdateOneRequiredWithoutAuthorization_lettersNestedInput
    authorization_letters_products?: authorization_letters_productsUpdateManyWithoutAuthorization_lettersNestedInput
  }

  export type authorization_lettersUncheckedUpdateWithoutCnabsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    id_banks?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authorization_letters_products?: authorization_letters_productsUncheckedUpdateManyWithoutAuthorization_lettersNestedInput
  }

  export type authorization_lettersUncheckedUpdateManyWithoutCnabsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cnpj?: StringFieldUpdateOperationsInput | string
    corporate_name?: StringFieldUpdateOperationsInput | string
    responsible_person_name?: StringFieldUpdateOperationsInput | string
    responsible_person_title?: StringFieldUpdateOperationsInput | string
    responsible_person_cellphone?: StringFieldUpdateOperationsInput | string
    responsible_person_email?: StringFieldUpdateOperationsInput | string
    manager_name?: StringFieldUpdateOperationsInput | string
    manager_cellphone?: StringFieldUpdateOperationsInput | string
    manager_email?: StringFieldUpdateOperationsInput | string
    branch_number?: StringFieldUpdateOperationsInput | string
    branch_dv?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    account_dv?: StringFieldUpdateOperationsInput | string
    agreement_number?: StringFieldUpdateOperationsInput | string
    id_banks?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type banks_cnabsUpdateWithoutCnabsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    banks?: banksUpdateOneRequiredWithoutBanks_cnabsNestedInput
  }

  export type banks_cnabsUncheckedUpdateWithoutCnabsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_banks?: IntFieldUpdateOperationsInput | number
  }

  export type banks_cnabsUncheckedUpdateManyWithoutCnabsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_banks?: IntFieldUpdateOperationsInput | number
  }

  export type authorization_letters_productsCreateManyProductsInput = {
    id?: bigint | number
    id_authorization_letters: bigint | number
  }

  export type banks_productsCreateManyProductsInput = {
    id?: bigint | number
    id_banks: number
  }

  export type authorization_letters_productsUpdateWithoutProductsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    authorization_letters?: authorization_lettersUpdateOneRequiredWithoutAuthorization_letters_productsNestedInput
  }

  export type authorization_letters_productsUncheckedUpdateWithoutProductsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_authorization_letters?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type authorization_letters_productsUncheckedUpdateManyWithoutProductsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_authorization_letters?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type banks_productsUpdateWithoutProductsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    banks?: banksUpdateOneRequiredWithoutBanks_productsNestedInput
  }

  export type banks_productsUncheckedUpdateWithoutProductsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_banks?: IntFieldUpdateOperationsInput | number
  }

  export type banks_productsUncheckedUpdateManyWithoutProductsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_banks?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}