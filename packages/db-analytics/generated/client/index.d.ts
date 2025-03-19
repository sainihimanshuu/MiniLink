
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
 * Model ShortUrl
 * 
 */
export type ShortUrl = $Result.DefaultSelection<Prisma.$ShortUrlPayload>
/**
 * Model ClickInfo
 * 
 */
export type ClickInfo = $Result.DefaultSelection<Prisma.$ClickInfoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ShortUrls
 * const shortUrls = await prisma.shortUrl.findMany()
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
   * // Fetch zero or more ShortUrls
   * const shortUrls = await prisma.shortUrl.findMany()
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
   * `prisma.shortUrl`: Exposes CRUD operations for the **ShortUrl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShortUrls
    * const shortUrls = await prisma.shortUrl.findMany()
    * ```
    */
  get shortUrl(): Prisma.ShortUrlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clickInfo`: Exposes CRUD operations for the **ClickInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClickInfos
    * const clickInfos = await prisma.clickInfo.findMany()
    * ```
    */
  get clickInfo(): Prisma.ClickInfoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    ShortUrl: 'ShortUrl',
    ClickInfo: 'ClickInfo'
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
      modelProps: "shortUrl" | "clickInfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ShortUrl: {
        payload: Prisma.$ShortUrlPayload<ExtArgs>
        fields: Prisma.ShortUrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShortUrlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShortUrlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          findFirst: {
            args: Prisma.ShortUrlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShortUrlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          findMany: {
            args: Prisma.ShortUrlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>[]
          }
          create: {
            args: Prisma.ShortUrlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          createMany: {
            args: Prisma.ShortUrlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShortUrlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>[]
          }
          delete: {
            args: Prisma.ShortUrlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          update: {
            args: Prisma.ShortUrlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          deleteMany: {
            args: Prisma.ShortUrlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShortUrlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShortUrlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>[]
          }
          upsert: {
            args: Prisma.ShortUrlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          aggregate: {
            args: Prisma.ShortUrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShortUrl>
          }
          groupBy: {
            args: Prisma.ShortUrlGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShortUrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShortUrlCountArgs<ExtArgs>
            result: $Utils.Optional<ShortUrlCountAggregateOutputType> | number
          }
        }
      }
      ClickInfo: {
        payload: Prisma.$ClickInfoPayload<ExtArgs>
        fields: Prisma.ClickInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClickInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClickInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickInfoPayload>
          }
          findFirst: {
            args: Prisma.ClickInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClickInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickInfoPayload>
          }
          findMany: {
            args: Prisma.ClickInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickInfoPayload>[]
          }
          create: {
            args: Prisma.ClickInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickInfoPayload>
          }
          createMany: {
            args: Prisma.ClickInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClickInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickInfoPayload>[]
          }
          delete: {
            args: Prisma.ClickInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickInfoPayload>
          }
          update: {
            args: Prisma.ClickInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickInfoPayload>
          }
          deleteMany: {
            args: Prisma.ClickInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClickInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClickInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickInfoPayload>[]
          }
          upsert: {
            args: Prisma.ClickInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickInfoPayload>
          }
          aggregate: {
            args: Prisma.ClickInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClickInfo>
          }
          groupBy: {
            args: Prisma.ClickInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClickInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClickInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ClickInfoCountAggregateOutputType> | number
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
    shortUrl?: ShortUrlOmit
    clickInfo?: ClickInfoOmit
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
   * Count Type ShortUrlCountOutputType
   */

  export type ShortUrlCountOutputType = {
    clickInfo: number
  }

  export type ShortUrlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clickInfo?: boolean | ShortUrlCountOutputTypeCountClickInfoArgs
  }

  // Custom InputTypes
  /**
   * ShortUrlCountOutputType without action
   */
  export type ShortUrlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrlCountOutputType
     */
    select?: ShortUrlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShortUrlCountOutputType without action
   */
  export type ShortUrlCountOutputTypeCountClickInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClickInfoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ShortUrl
   */

  export type AggregateShortUrl = {
    _count: ShortUrlCountAggregateOutputType | null
    _avg: ShortUrlAvgAggregateOutputType | null
    _sum: ShortUrlSumAggregateOutputType | null
    _min: ShortUrlMinAggregateOutputType | null
    _max: ShortUrlMaxAggregateOutputType | null
  }

  export type ShortUrlAvgAggregateOutputType = {
    id: number | null
  }

  export type ShortUrlSumAggregateOutputType = {
    id: number | null
  }

  export type ShortUrlMinAggregateOutputType = {
    id: number | null
    shortUrl: string | null
    ownerMail: string | null
  }

  export type ShortUrlMaxAggregateOutputType = {
    id: number | null
    shortUrl: string | null
    ownerMail: string | null
  }

  export type ShortUrlCountAggregateOutputType = {
    id: number
    shortUrl: number
    ownerMail: number
    _all: number
  }


  export type ShortUrlAvgAggregateInputType = {
    id?: true
  }

  export type ShortUrlSumAggregateInputType = {
    id?: true
  }

  export type ShortUrlMinAggregateInputType = {
    id?: true
    shortUrl?: true
    ownerMail?: true
  }

  export type ShortUrlMaxAggregateInputType = {
    id?: true
    shortUrl?: true
    ownerMail?: true
  }

  export type ShortUrlCountAggregateInputType = {
    id?: true
    shortUrl?: true
    ownerMail?: true
    _all?: true
  }

  export type ShortUrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortUrl to aggregate.
     */
    where?: ShortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortUrls to fetch.
     */
    orderBy?: ShortUrlOrderByWithRelationInput | ShortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShortUrls
    **/
    _count?: true | ShortUrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShortUrlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShortUrlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShortUrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShortUrlMaxAggregateInputType
  }

  export type GetShortUrlAggregateType<T extends ShortUrlAggregateArgs> = {
        [P in keyof T & keyof AggregateShortUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShortUrl[P]>
      : GetScalarType<T[P], AggregateShortUrl[P]>
  }




  export type ShortUrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortUrlWhereInput
    orderBy?: ShortUrlOrderByWithAggregationInput | ShortUrlOrderByWithAggregationInput[]
    by: ShortUrlScalarFieldEnum[] | ShortUrlScalarFieldEnum
    having?: ShortUrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShortUrlCountAggregateInputType | true
    _avg?: ShortUrlAvgAggregateInputType
    _sum?: ShortUrlSumAggregateInputType
    _min?: ShortUrlMinAggregateInputType
    _max?: ShortUrlMaxAggregateInputType
  }

  export type ShortUrlGroupByOutputType = {
    id: number
    shortUrl: string
    ownerMail: string
    _count: ShortUrlCountAggregateOutputType | null
    _avg: ShortUrlAvgAggregateOutputType | null
    _sum: ShortUrlSumAggregateOutputType | null
    _min: ShortUrlMinAggregateOutputType | null
    _max: ShortUrlMaxAggregateOutputType | null
  }

  type GetShortUrlGroupByPayload<T extends ShortUrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShortUrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShortUrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShortUrlGroupByOutputType[P]>
            : GetScalarType<T[P], ShortUrlGroupByOutputType[P]>
        }
      >
    >


  export type ShortUrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortUrl?: boolean
    ownerMail?: boolean
    clickInfo?: boolean | ShortUrl$clickInfoArgs<ExtArgs>
    _count?: boolean | ShortUrlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shortUrl"]>

  export type ShortUrlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortUrl?: boolean
    ownerMail?: boolean
  }, ExtArgs["result"]["shortUrl"]>

  export type ShortUrlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortUrl?: boolean
    ownerMail?: boolean
  }, ExtArgs["result"]["shortUrl"]>

  export type ShortUrlSelectScalar = {
    id?: boolean
    shortUrl?: boolean
    ownerMail?: boolean
  }

  export type ShortUrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortUrl" | "ownerMail", ExtArgs["result"]["shortUrl"]>
  export type ShortUrlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clickInfo?: boolean | ShortUrl$clickInfoArgs<ExtArgs>
    _count?: boolean | ShortUrlCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShortUrlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShortUrlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShortUrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShortUrl"
    objects: {
      clickInfo: Prisma.$ClickInfoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shortUrl: string
      ownerMail: string
    }, ExtArgs["result"]["shortUrl"]>
    composites: {}
  }

  type ShortUrlGetPayload<S extends boolean | null | undefined | ShortUrlDefaultArgs> = $Result.GetResult<Prisma.$ShortUrlPayload, S>

  type ShortUrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShortUrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShortUrlCountAggregateInputType | true
    }

  export interface ShortUrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShortUrl'], meta: { name: 'ShortUrl' } }
    /**
     * Find zero or one ShortUrl that matches the filter.
     * @param {ShortUrlFindUniqueArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShortUrlFindUniqueArgs>(args: SelectSubset<T, ShortUrlFindUniqueArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShortUrl that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShortUrlFindUniqueOrThrowArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShortUrlFindUniqueOrThrowArgs>(args: SelectSubset<T, ShortUrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortUrl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlFindFirstArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShortUrlFindFirstArgs>(args?: SelectSubset<T, ShortUrlFindFirstArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortUrl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlFindFirstOrThrowArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShortUrlFindFirstOrThrowArgs>(args?: SelectSubset<T, ShortUrlFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShortUrls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShortUrls
     * const shortUrls = await prisma.shortUrl.findMany()
     * 
     * // Get first 10 ShortUrls
     * const shortUrls = await prisma.shortUrl.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shortUrlWithIdOnly = await prisma.shortUrl.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShortUrlFindManyArgs>(args?: SelectSubset<T, ShortUrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShortUrl.
     * @param {ShortUrlCreateArgs} args - Arguments to create a ShortUrl.
     * @example
     * // Create one ShortUrl
     * const ShortUrl = await prisma.shortUrl.create({
     *   data: {
     *     // ... data to create a ShortUrl
     *   }
     * })
     * 
     */
    create<T extends ShortUrlCreateArgs>(args: SelectSubset<T, ShortUrlCreateArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShortUrls.
     * @param {ShortUrlCreateManyArgs} args - Arguments to create many ShortUrls.
     * @example
     * // Create many ShortUrls
     * const shortUrl = await prisma.shortUrl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShortUrlCreateManyArgs>(args?: SelectSubset<T, ShortUrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShortUrls and returns the data saved in the database.
     * @param {ShortUrlCreateManyAndReturnArgs} args - Arguments to create many ShortUrls.
     * @example
     * // Create many ShortUrls
     * const shortUrl = await prisma.shortUrl.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShortUrls and only return the `id`
     * const shortUrlWithIdOnly = await prisma.shortUrl.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShortUrlCreateManyAndReturnArgs>(args?: SelectSubset<T, ShortUrlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShortUrl.
     * @param {ShortUrlDeleteArgs} args - Arguments to delete one ShortUrl.
     * @example
     * // Delete one ShortUrl
     * const ShortUrl = await prisma.shortUrl.delete({
     *   where: {
     *     // ... filter to delete one ShortUrl
     *   }
     * })
     * 
     */
    delete<T extends ShortUrlDeleteArgs>(args: SelectSubset<T, ShortUrlDeleteArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShortUrl.
     * @param {ShortUrlUpdateArgs} args - Arguments to update one ShortUrl.
     * @example
     * // Update one ShortUrl
     * const shortUrl = await prisma.shortUrl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShortUrlUpdateArgs>(args: SelectSubset<T, ShortUrlUpdateArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShortUrls.
     * @param {ShortUrlDeleteManyArgs} args - Arguments to filter ShortUrls to delete.
     * @example
     * // Delete a few ShortUrls
     * const { count } = await prisma.shortUrl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShortUrlDeleteManyArgs>(args?: SelectSubset<T, ShortUrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShortUrls
     * const shortUrl = await prisma.shortUrl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShortUrlUpdateManyArgs>(args: SelectSubset<T, ShortUrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortUrls and returns the data updated in the database.
     * @param {ShortUrlUpdateManyAndReturnArgs} args - Arguments to update many ShortUrls.
     * @example
     * // Update many ShortUrls
     * const shortUrl = await prisma.shortUrl.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShortUrls and only return the `id`
     * const shortUrlWithIdOnly = await prisma.shortUrl.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShortUrlUpdateManyAndReturnArgs>(args: SelectSubset<T, ShortUrlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShortUrl.
     * @param {ShortUrlUpsertArgs} args - Arguments to update or create a ShortUrl.
     * @example
     * // Update or create a ShortUrl
     * const shortUrl = await prisma.shortUrl.upsert({
     *   create: {
     *     // ... data to create a ShortUrl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShortUrl we want to update
     *   }
     * })
     */
    upsert<T extends ShortUrlUpsertArgs>(args: SelectSubset<T, ShortUrlUpsertArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShortUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlCountArgs} args - Arguments to filter ShortUrls to count.
     * @example
     * // Count the number of ShortUrls
     * const count = await prisma.shortUrl.count({
     *   where: {
     *     // ... the filter for the ShortUrls we want to count
     *   }
     * })
    **/
    count<T extends ShortUrlCountArgs>(
      args?: Subset<T, ShortUrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShortUrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShortUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShortUrlAggregateArgs>(args: Subset<T, ShortUrlAggregateArgs>): Prisma.PrismaPromise<GetShortUrlAggregateType<T>>

    /**
     * Group by ShortUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlGroupByArgs} args - Group by arguments.
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
      T extends ShortUrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShortUrlGroupByArgs['orderBy'] }
        : { orderBy?: ShortUrlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShortUrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShortUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShortUrl model
   */
  readonly fields: ShortUrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShortUrl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShortUrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clickInfo<T extends ShortUrl$clickInfoArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrl$clickInfoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ShortUrl model
   */ 
  interface ShortUrlFieldRefs {
    readonly id: FieldRef<"ShortUrl", 'Int'>
    readonly shortUrl: FieldRef<"ShortUrl", 'String'>
    readonly ownerMail: FieldRef<"ShortUrl", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShortUrl findUnique
   */
  export type ShortUrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter, which ShortUrl to fetch.
     */
    where: ShortUrlWhereUniqueInput
  }

  /**
   * ShortUrl findUniqueOrThrow
   */
  export type ShortUrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter, which ShortUrl to fetch.
     */
    where: ShortUrlWhereUniqueInput
  }

  /**
   * ShortUrl findFirst
   */
  export type ShortUrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter, which ShortUrl to fetch.
     */
    where?: ShortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortUrls to fetch.
     */
    orderBy?: ShortUrlOrderByWithRelationInput | ShortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortUrls.
     */
    cursor?: ShortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortUrls.
     */
    distinct?: ShortUrlScalarFieldEnum | ShortUrlScalarFieldEnum[]
  }

  /**
   * ShortUrl findFirstOrThrow
   */
  export type ShortUrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter, which ShortUrl to fetch.
     */
    where?: ShortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortUrls to fetch.
     */
    orderBy?: ShortUrlOrderByWithRelationInput | ShortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortUrls.
     */
    cursor?: ShortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortUrls.
     */
    distinct?: ShortUrlScalarFieldEnum | ShortUrlScalarFieldEnum[]
  }

  /**
   * ShortUrl findMany
   */
  export type ShortUrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter, which ShortUrls to fetch.
     */
    where?: ShortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortUrls to fetch.
     */
    orderBy?: ShortUrlOrderByWithRelationInput | ShortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShortUrls.
     */
    cursor?: ShortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortUrls.
     */
    skip?: number
    distinct?: ShortUrlScalarFieldEnum | ShortUrlScalarFieldEnum[]
  }

  /**
   * ShortUrl create
   */
  export type ShortUrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * The data needed to create a ShortUrl.
     */
    data: XOR<ShortUrlCreateInput, ShortUrlUncheckedCreateInput>
  }

  /**
   * ShortUrl createMany
   */
  export type ShortUrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShortUrls.
     */
    data: ShortUrlCreateManyInput | ShortUrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShortUrl createManyAndReturn
   */
  export type ShortUrlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * The data used to create many ShortUrls.
     */
    data: ShortUrlCreateManyInput | ShortUrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShortUrl update
   */
  export type ShortUrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * The data needed to update a ShortUrl.
     */
    data: XOR<ShortUrlUpdateInput, ShortUrlUncheckedUpdateInput>
    /**
     * Choose, which ShortUrl to update.
     */
    where: ShortUrlWhereUniqueInput
  }

  /**
   * ShortUrl updateMany
   */
  export type ShortUrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShortUrls.
     */
    data: XOR<ShortUrlUpdateManyMutationInput, ShortUrlUncheckedUpdateManyInput>
    /**
     * Filter which ShortUrls to update
     */
    where?: ShortUrlWhereInput
    /**
     * Limit how many ShortUrls to update.
     */
    limit?: number
  }

  /**
   * ShortUrl updateManyAndReturn
   */
  export type ShortUrlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * The data used to update ShortUrls.
     */
    data: XOR<ShortUrlUpdateManyMutationInput, ShortUrlUncheckedUpdateManyInput>
    /**
     * Filter which ShortUrls to update
     */
    where?: ShortUrlWhereInput
    /**
     * Limit how many ShortUrls to update.
     */
    limit?: number
  }

  /**
   * ShortUrl upsert
   */
  export type ShortUrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * The filter to search for the ShortUrl to update in case it exists.
     */
    where: ShortUrlWhereUniqueInput
    /**
     * In case the ShortUrl found by the `where` argument doesn't exist, create a new ShortUrl with this data.
     */
    create: XOR<ShortUrlCreateInput, ShortUrlUncheckedCreateInput>
    /**
     * In case the ShortUrl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShortUrlUpdateInput, ShortUrlUncheckedUpdateInput>
  }

  /**
   * ShortUrl delete
   */
  export type ShortUrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter which ShortUrl to delete.
     */
    where: ShortUrlWhereUniqueInput
  }

  /**
   * ShortUrl deleteMany
   */
  export type ShortUrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortUrls to delete
     */
    where?: ShortUrlWhereInput
    /**
     * Limit how many ShortUrls to delete.
     */
    limit?: number
  }

  /**
   * ShortUrl.clickInfo
   */
  export type ShortUrl$clickInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoInclude<ExtArgs> | null
    where?: ClickInfoWhereInput
    orderBy?: ClickInfoOrderByWithRelationInput | ClickInfoOrderByWithRelationInput[]
    cursor?: ClickInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClickInfoScalarFieldEnum | ClickInfoScalarFieldEnum[]
  }

  /**
   * ShortUrl without action
   */
  export type ShortUrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
  }


  /**
   * Model ClickInfo
   */

  export type AggregateClickInfo = {
    _count: ClickInfoCountAggregateOutputType | null
    _avg: ClickInfoAvgAggregateOutputType | null
    _sum: ClickInfoSumAggregateOutputType | null
    _min: ClickInfoMinAggregateOutputType | null
    _max: ClickInfoMaxAggregateOutputType | null
  }

  export type ClickInfoAvgAggregateOutputType = {
    id: number | null
  }

  export type ClickInfoSumAggregateOutputType = {
    id: number | null
  }

  export type ClickInfoMinAggregateOutputType = {
    id: number | null
    deviceType: string | null
    city: string | null
    country: string | null
    referer: string | null
    shortUrl: string | null
    clickDate: Date | null
  }

  export type ClickInfoMaxAggregateOutputType = {
    id: number | null
    deviceType: string | null
    city: string | null
    country: string | null
    referer: string | null
    shortUrl: string | null
    clickDate: Date | null
  }

  export type ClickInfoCountAggregateOutputType = {
    id: number
    deviceType: number
    city: number
    country: number
    referer: number
    shortUrl: number
    clickDate: number
    _all: number
  }


  export type ClickInfoAvgAggregateInputType = {
    id?: true
  }

  export type ClickInfoSumAggregateInputType = {
    id?: true
  }

  export type ClickInfoMinAggregateInputType = {
    id?: true
    deviceType?: true
    city?: true
    country?: true
    referer?: true
    shortUrl?: true
    clickDate?: true
  }

  export type ClickInfoMaxAggregateInputType = {
    id?: true
    deviceType?: true
    city?: true
    country?: true
    referer?: true
    shortUrl?: true
    clickDate?: true
  }

  export type ClickInfoCountAggregateInputType = {
    id?: true
    deviceType?: true
    city?: true
    country?: true
    referer?: true
    shortUrl?: true
    clickDate?: true
    _all?: true
  }

  export type ClickInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClickInfo to aggregate.
     */
    where?: ClickInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickInfos to fetch.
     */
    orderBy?: ClickInfoOrderByWithRelationInput | ClickInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClickInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClickInfos
    **/
    _count?: true | ClickInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClickInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClickInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClickInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClickInfoMaxAggregateInputType
  }

  export type GetClickInfoAggregateType<T extends ClickInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateClickInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClickInfo[P]>
      : GetScalarType<T[P], AggregateClickInfo[P]>
  }




  export type ClickInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClickInfoWhereInput
    orderBy?: ClickInfoOrderByWithAggregationInput | ClickInfoOrderByWithAggregationInput[]
    by: ClickInfoScalarFieldEnum[] | ClickInfoScalarFieldEnum
    having?: ClickInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClickInfoCountAggregateInputType | true
    _avg?: ClickInfoAvgAggregateInputType
    _sum?: ClickInfoSumAggregateInputType
    _min?: ClickInfoMinAggregateInputType
    _max?: ClickInfoMaxAggregateInputType
  }

  export type ClickInfoGroupByOutputType = {
    id: number
    deviceType: string
    city: string
    country: string
    referer: string
    shortUrl: string
    clickDate: Date
    _count: ClickInfoCountAggregateOutputType | null
    _avg: ClickInfoAvgAggregateOutputType | null
    _sum: ClickInfoSumAggregateOutputType | null
    _min: ClickInfoMinAggregateOutputType | null
    _max: ClickInfoMaxAggregateOutputType | null
  }

  type GetClickInfoGroupByPayload<T extends ClickInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClickInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClickInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClickInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ClickInfoGroupByOutputType[P]>
        }
      >
    >


  export type ClickInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceType?: boolean
    city?: boolean
    country?: boolean
    referer?: boolean
    shortUrl?: boolean
    clickDate?: boolean
    url?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clickInfo"]>

  export type ClickInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceType?: boolean
    city?: boolean
    country?: boolean
    referer?: boolean
    shortUrl?: boolean
    clickDate?: boolean
    url?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clickInfo"]>

  export type ClickInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceType?: boolean
    city?: boolean
    country?: boolean
    referer?: boolean
    shortUrl?: boolean
    clickDate?: boolean
    url?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clickInfo"]>

  export type ClickInfoSelectScalar = {
    id?: boolean
    deviceType?: boolean
    city?: boolean
    country?: boolean
    referer?: boolean
    shortUrl?: boolean
    clickDate?: boolean
  }

  export type ClickInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceType" | "city" | "country" | "referer" | "shortUrl" | "clickDate", ExtArgs["result"]["clickInfo"]>
  export type ClickInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }
  export type ClickInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }
  export type ClickInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }

  export type $ClickInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClickInfo"
    objects: {
      url: Prisma.$ShortUrlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deviceType: string
      city: string
      country: string
      referer: string
      shortUrl: string
      clickDate: Date
    }, ExtArgs["result"]["clickInfo"]>
    composites: {}
  }

  type ClickInfoGetPayload<S extends boolean | null | undefined | ClickInfoDefaultArgs> = $Result.GetResult<Prisma.$ClickInfoPayload, S>

  type ClickInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClickInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClickInfoCountAggregateInputType | true
    }

  export interface ClickInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClickInfo'], meta: { name: 'ClickInfo' } }
    /**
     * Find zero or one ClickInfo that matches the filter.
     * @param {ClickInfoFindUniqueArgs} args - Arguments to find a ClickInfo
     * @example
     * // Get one ClickInfo
     * const clickInfo = await prisma.clickInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClickInfoFindUniqueArgs>(args: SelectSubset<T, ClickInfoFindUniqueArgs<ExtArgs>>): Prisma__ClickInfoClient<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClickInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClickInfoFindUniqueOrThrowArgs} args - Arguments to find a ClickInfo
     * @example
     * // Get one ClickInfo
     * const clickInfo = await prisma.clickInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClickInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ClickInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClickInfoClient<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClickInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickInfoFindFirstArgs} args - Arguments to find a ClickInfo
     * @example
     * // Get one ClickInfo
     * const clickInfo = await prisma.clickInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClickInfoFindFirstArgs>(args?: SelectSubset<T, ClickInfoFindFirstArgs<ExtArgs>>): Prisma__ClickInfoClient<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClickInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickInfoFindFirstOrThrowArgs} args - Arguments to find a ClickInfo
     * @example
     * // Get one ClickInfo
     * const clickInfo = await prisma.clickInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClickInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ClickInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClickInfoClient<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClickInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClickInfos
     * const clickInfos = await prisma.clickInfo.findMany()
     * 
     * // Get first 10 ClickInfos
     * const clickInfos = await prisma.clickInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clickInfoWithIdOnly = await prisma.clickInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClickInfoFindManyArgs>(args?: SelectSubset<T, ClickInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClickInfo.
     * @param {ClickInfoCreateArgs} args - Arguments to create a ClickInfo.
     * @example
     * // Create one ClickInfo
     * const ClickInfo = await prisma.clickInfo.create({
     *   data: {
     *     // ... data to create a ClickInfo
     *   }
     * })
     * 
     */
    create<T extends ClickInfoCreateArgs>(args: SelectSubset<T, ClickInfoCreateArgs<ExtArgs>>): Prisma__ClickInfoClient<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClickInfos.
     * @param {ClickInfoCreateManyArgs} args - Arguments to create many ClickInfos.
     * @example
     * // Create many ClickInfos
     * const clickInfo = await prisma.clickInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClickInfoCreateManyArgs>(args?: SelectSubset<T, ClickInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClickInfos and returns the data saved in the database.
     * @param {ClickInfoCreateManyAndReturnArgs} args - Arguments to create many ClickInfos.
     * @example
     * // Create many ClickInfos
     * const clickInfo = await prisma.clickInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClickInfos and only return the `id`
     * const clickInfoWithIdOnly = await prisma.clickInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClickInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ClickInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClickInfo.
     * @param {ClickInfoDeleteArgs} args - Arguments to delete one ClickInfo.
     * @example
     * // Delete one ClickInfo
     * const ClickInfo = await prisma.clickInfo.delete({
     *   where: {
     *     // ... filter to delete one ClickInfo
     *   }
     * })
     * 
     */
    delete<T extends ClickInfoDeleteArgs>(args: SelectSubset<T, ClickInfoDeleteArgs<ExtArgs>>): Prisma__ClickInfoClient<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClickInfo.
     * @param {ClickInfoUpdateArgs} args - Arguments to update one ClickInfo.
     * @example
     * // Update one ClickInfo
     * const clickInfo = await prisma.clickInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClickInfoUpdateArgs>(args: SelectSubset<T, ClickInfoUpdateArgs<ExtArgs>>): Prisma__ClickInfoClient<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClickInfos.
     * @param {ClickInfoDeleteManyArgs} args - Arguments to filter ClickInfos to delete.
     * @example
     * // Delete a few ClickInfos
     * const { count } = await prisma.clickInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClickInfoDeleteManyArgs>(args?: SelectSubset<T, ClickInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClickInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClickInfos
     * const clickInfo = await prisma.clickInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClickInfoUpdateManyArgs>(args: SelectSubset<T, ClickInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClickInfos and returns the data updated in the database.
     * @param {ClickInfoUpdateManyAndReturnArgs} args - Arguments to update many ClickInfos.
     * @example
     * // Update many ClickInfos
     * const clickInfo = await prisma.clickInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClickInfos and only return the `id`
     * const clickInfoWithIdOnly = await prisma.clickInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClickInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ClickInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClickInfo.
     * @param {ClickInfoUpsertArgs} args - Arguments to update or create a ClickInfo.
     * @example
     * // Update or create a ClickInfo
     * const clickInfo = await prisma.clickInfo.upsert({
     *   create: {
     *     // ... data to create a ClickInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClickInfo we want to update
     *   }
     * })
     */
    upsert<T extends ClickInfoUpsertArgs>(args: SelectSubset<T, ClickInfoUpsertArgs<ExtArgs>>): Prisma__ClickInfoClient<$Result.GetResult<Prisma.$ClickInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClickInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickInfoCountArgs} args - Arguments to filter ClickInfos to count.
     * @example
     * // Count the number of ClickInfos
     * const count = await prisma.clickInfo.count({
     *   where: {
     *     // ... the filter for the ClickInfos we want to count
     *   }
     * })
    **/
    count<T extends ClickInfoCountArgs>(
      args?: Subset<T, ClickInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClickInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClickInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClickInfoAggregateArgs>(args: Subset<T, ClickInfoAggregateArgs>): Prisma.PrismaPromise<GetClickInfoAggregateType<T>>

    /**
     * Group by ClickInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickInfoGroupByArgs} args - Group by arguments.
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
      T extends ClickInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClickInfoGroupByArgs['orderBy'] }
        : { orderBy?: ClickInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClickInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClickInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClickInfo model
   */
  readonly fields: ClickInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClickInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClickInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    url<T extends ShortUrlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrlDefaultArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClickInfo model
   */ 
  interface ClickInfoFieldRefs {
    readonly id: FieldRef<"ClickInfo", 'Int'>
    readonly deviceType: FieldRef<"ClickInfo", 'String'>
    readonly city: FieldRef<"ClickInfo", 'String'>
    readonly country: FieldRef<"ClickInfo", 'String'>
    readonly referer: FieldRef<"ClickInfo", 'String'>
    readonly shortUrl: FieldRef<"ClickInfo", 'String'>
    readonly clickDate: FieldRef<"ClickInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClickInfo findUnique
   */
  export type ClickInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoInclude<ExtArgs> | null
    /**
     * Filter, which ClickInfo to fetch.
     */
    where: ClickInfoWhereUniqueInput
  }

  /**
   * ClickInfo findUniqueOrThrow
   */
  export type ClickInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoInclude<ExtArgs> | null
    /**
     * Filter, which ClickInfo to fetch.
     */
    where: ClickInfoWhereUniqueInput
  }

  /**
   * ClickInfo findFirst
   */
  export type ClickInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoInclude<ExtArgs> | null
    /**
     * Filter, which ClickInfo to fetch.
     */
    where?: ClickInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickInfos to fetch.
     */
    orderBy?: ClickInfoOrderByWithRelationInput | ClickInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClickInfos.
     */
    cursor?: ClickInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClickInfos.
     */
    distinct?: ClickInfoScalarFieldEnum | ClickInfoScalarFieldEnum[]
  }

  /**
   * ClickInfo findFirstOrThrow
   */
  export type ClickInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoInclude<ExtArgs> | null
    /**
     * Filter, which ClickInfo to fetch.
     */
    where?: ClickInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickInfos to fetch.
     */
    orderBy?: ClickInfoOrderByWithRelationInput | ClickInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClickInfos.
     */
    cursor?: ClickInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClickInfos.
     */
    distinct?: ClickInfoScalarFieldEnum | ClickInfoScalarFieldEnum[]
  }

  /**
   * ClickInfo findMany
   */
  export type ClickInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoInclude<ExtArgs> | null
    /**
     * Filter, which ClickInfos to fetch.
     */
    where?: ClickInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickInfos to fetch.
     */
    orderBy?: ClickInfoOrderByWithRelationInput | ClickInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClickInfos.
     */
    cursor?: ClickInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickInfos.
     */
    skip?: number
    distinct?: ClickInfoScalarFieldEnum | ClickInfoScalarFieldEnum[]
  }

  /**
   * ClickInfo create
   */
  export type ClickInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a ClickInfo.
     */
    data: XOR<ClickInfoCreateInput, ClickInfoUncheckedCreateInput>
  }

  /**
   * ClickInfo createMany
   */
  export type ClickInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClickInfos.
     */
    data: ClickInfoCreateManyInput | ClickInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClickInfo createManyAndReturn
   */
  export type ClickInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ClickInfos.
     */
    data: ClickInfoCreateManyInput | ClickInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClickInfo update
   */
  export type ClickInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a ClickInfo.
     */
    data: XOR<ClickInfoUpdateInput, ClickInfoUncheckedUpdateInput>
    /**
     * Choose, which ClickInfo to update.
     */
    where: ClickInfoWhereUniqueInput
  }

  /**
   * ClickInfo updateMany
   */
  export type ClickInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClickInfos.
     */
    data: XOR<ClickInfoUpdateManyMutationInput, ClickInfoUncheckedUpdateManyInput>
    /**
     * Filter which ClickInfos to update
     */
    where?: ClickInfoWhereInput
    /**
     * Limit how many ClickInfos to update.
     */
    limit?: number
  }

  /**
   * ClickInfo updateManyAndReturn
   */
  export type ClickInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * The data used to update ClickInfos.
     */
    data: XOR<ClickInfoUpdateManyMutationInput, ClickInfoUncheckedUpdateManyInput>
    /**
     * Filter which ClickInfos to update
     */
    where?: ClickInfoWhereInput
    /**
     * Limit how many ClickInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClickInfo upsert
   */
  export type ClickInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the ClickInfo to update in case it exists.
     */
    where: ClickInfoWhereUniqueInput
    /**
     * In case the ClickInfo found by the `where` argument doesn't exist, create a new ClickInfo with this data.
     */
    create: XOR<ClickInfoCreateInput, ClickInfoUncheckedCreateInput>
    /**
     * In case the ClickInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClickInfoUpdateInput, ClickInfoUncheckedUpdateInput>
  }

  /**
   * ClickInfo delete
   */
  export type ClickInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoInclude<ExtArgs> | null
    /**
     * Filter which ClickInfo to delete.
     */
    where: ClickInfoWhereUniqueInput
  }

  /**
   * ClickInfo deleteMany
   */
  export type ClickInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClickInfos to delete
     */
    where?: ClickInfoWhereInput
    /**
     * Limit how many ClickInfos to delete.
     */
    limit?: number
  }

  /**
   * ClickInfo without action
   */
  export type ClickInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickInfo
     */
    select?: ClickInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickInfo
     */
    omit?: ClickInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickInfoInclude<ExtArgs> | null
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


  export const ShortUrlScalarFieldEnum: {
    id: 'id',
    shortUrl: 'shortUrl',
    ownerMail: 'ownerMail'
  };

  export type ShortUrlScalarFieldEnum = (typeof ShortUrlScalarFieldEnum)[keyof typeof ShortUrlScalarFieldEnum]


  export const ClickInfoScalarFieldEnum: {
    id: 'id',
    deviceType: 'deviceType',
    city: 'city',
    country: 'country',
    referer: 'referer',
    shortUrl: 'shortUrl',
    clickDate: 'clickDate'
  };

  export type ClickInfoScalarFieldEnum = (typeof ClickInfoScalarFieldEnum)[keyof typeof ClickInfoScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type ShortUrlWhereInput = {
    AND?: ShortUrlWhereInput | ShortUrlWhereInput[]
    OR?: ShortUrlWhereInput[]
    NOT?: ShortUrlWhereInput | ShortUrlWhereInput[]
    id?: IntFilter<"ShortUrl"> | number
    shortUrl?: StringFilter<"ShortUrl"> | string
    ownerMail?: StringFilter<"ShortUrl"> | string
    clickInfo?: ClickInfoListRelationFilter
  }

  export type ShortUrlOrderByWithRelationInput = {
    id?: SortOrder
    shortUrl?: SortOrder
    ownerMail?: SortOrder
    clickInfo?: ClickInfoOrderByRelationAggregateInput
  }

  export type ShortUrlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    shortUrl?: string
    AND?: ShortUrlWhereInput | ShortUrlWhereInput[]
    OR?: ShortUrlWhereInput[]
    NOT?: ShortUrlWhereInput | ShortUrlWhereInput[]
    ownerMail?: StringFilter<"ShortUrl"> | string
    clickInfo?: ClickInfoListRelationFilter
  }, "id" | "shortUrl">

  export type ShortUrlOrderByWithAggregationInput = {
    id?: SortOrder
    shortUrl?: SortOrder
    ownerMail?: SortOrder
    _count?: ShortUrlCountOrderByAggregateInput
    _avg?: ShortUrlAvgOrderByAggregateInput
    _max?: ShortUrlMaxOrderByAggregateInput
    _min?: ShortUrlMinOrderByAggregateInput
    _sum?: ShortUrlSumOrderByAggregateInput
  }

  export type ShortUrlScalarWhereWithAggregatesInput = {
    AND?: ShortUrlScalarWhereWithAggregatesInput | ShortUrlScalarWhereWithAggregatesInput[]
    OR?: ShortUrlScalarWhereWithAggregatesInput[]
    NOT?: ShortUrlScalarWhereWithAggregatesInput | ShortUrlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShortUrl"> | number
    shortUrl?: StringWithAggregatesFilter<"ShortUrl"> | string
    ownerMail?: StringWithAggregatesFilter<"ShortUrl"> | string
  }

  export type ClickInfoWhereInput = {
    AND?: ClickInfoWhereInput | ClickInfoWhereInput[]
    OR?: ClickInfoWhereInput[]
    NOT?: ClickInfoWhereInput | ClickInfoWhereInput[]
    id?: IntFilter<"ClickInfo"> | number
    deviceType?: StringFilter<"ClickInfo"> | string
    city?: StringFilter<"ClickInfo"> | string
    country?: StringFilter<"ClickInfo"> | string
    referer?: StringFilter<"ClickInfo"> | string
    shortUrl?: StringFilter<"ClickInfo"> | string
    clickDate?: DateTimeFilter<"ClickInfo"> | Date | string
    url?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }

  export type ClickInfoOrderByWithRelationInput = {
    id?: SortOrder
    deviceType?: SortOrder
    city?: SortOrder
    country?: SortOrder
    referer?: SortOrder
    shortUrl?: SortOrder
    clickDate?: SortOrder
    url?: ShortUrlOrderByWithRelationInput
  }

  export type ClickInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClickInfoWhereInput | ClickInfoWhereInput[]
    OR?: ClickInfoWhereInput[]
    NOT?: ClickInfoWhereInput | ClickInfoWhereInput[]
    deviceType?: StringFilter<"ClickInfo"> | string
    city?: StringFilter<"ClickInfo"> | string
    country?: StringFilter<"ClickInfo"> | string
    referer?: StringFilter<"ClickInfo"> | string
    shortUrl?: StringFilter<"ClickInfo"> | string
    clickDate?: DateTimeFilter<"ClickInfo"> | Date | string
    url?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }, "id">

  export type ClickInfoOrderByWithAggregationInput = {
    id?: SortOrder
    deviceType?: SortOrder
    city?: SortOrder
    country?: SortOrder
    referer?: SortOrder
    shortUrl?: SortOrder
    clickDate?: SortOrder
    _count?: ClickInfoCountOrderByAggregateInput
    _avg?: ClickInfoAvgOrderByAggregateInput
    _max?: ClickInfoMaxOrderByAggregateInput
    _min?: ClickInfoMinOrderByAggregateInput
    _sum?: ClickInfoSumOrderByAggregateInput
  }

  export type ClickInfoScalarWhereWithAggregatesInput = {
    AND?: ClickInfoScalarWhereWithAggregatesInput | ClickInfoScalarWhereWithAggregatesInput[]
    OR?: ClickInfoScalarWhereWithAggregatesInput[]
    NOT?: ClickInfoScalarWhereWithAggregatesInput | ClickInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClickInfo"> | number
    deviceType?: StringWithAggregatesFilter<"ClickInfo"> | string
    city?: StringWithAggregatesFilter<"ClickInfo"> | string
    country?: StringWithAggregatesFilter<"ClickInfo"> | string
    referer?: StringWithAggregatesFilter<"ClickInfo"> | string
    shortUrl?: StringWithAggregatesFilter<"ClickInfo"> | string
    clickDate?: DateTimeWithAggregatesFilter<"ClickInfo"> | Date | string
  }

  export type ShortUrlCreateInput = {
    shortUrl: string
    ownerMail: string
    clickInfo?: ClickInfoCreateNestedManyWithoutUrlInput
  }

  export type ShortUrlUncheckedCreateInput = {
    id?: number
    shortUrl: string
    ownerMail: string
    clickInfo?: ClickInfoUncheckedCreateNestedManyWithoutUrlInput
  }

  export type ShortUrlUpdateInput = {
    shortUrl?: StringFieldUpdateOperationsInput | string
    ownerMail?: StringFieldUpdateOperationsInput | string
    clickInfo?: ClickInfoUpdateManyWithoutUrlNestedInput
  }

  export type ShortUrlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shortUrl?: StringFieldUpdateOperationsInput | string
    ownerMail?: StringFieldUpdateOperationsInput | string
    clickInfo?: ClickInfoUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type ShortUrlCreateManyInput = {
    id?: number
    shortUrl: string
    ownerMail: string
  }

  export type ShortUrlUpdateManyMutationInput = {
    shortUrl?: StringFieldUpdateOperationsInput | string
    ownerMail?: StringFieldUpdateOperationsInput | string
  }

  export type ShortUrlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shortUrl?: StringFieldUpdateOperationsInput | string
    ownerMail?: StringFieldUpdateOperationsInput | string
  }

  export type ClickInfoCreateInput = {
    deviceType: string
    city: string
    country: string
    referer: string
    clickDate: Date | string
    url: ShortUrlCreateNestedOneWithoutClickInfoInput
  }

  export type ClickInfoUncheckedCreateInput = {
    id?: number
    deviceType: string
    city: string
    country: string
    referer: string
    shortUrl: string
    clickDate: Date | string
  }

  export type ClickInfoUpdateInput = {
    deviceType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    referer?: StringFieldUpdateOperationsInput | string
    clickDate?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: ShortUrlUpdateOneRequiredWithoutClickInfoNestedInput
  }

  export type ClickInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    referer?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    clickDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickInfoCreateManyInput = {
    id?: number
    deviceType: string
    city: string
    country: string
    referer: string
    shortUrl: string
    clickDate: Date | string
  }

  export type ClickInfoUpdateManyMutationInput = {
    deviceType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    referer?: StringFieldUpdateOperationsInput | string
    clickDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    referer?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    clickDate?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ClickInfoListRelationFilter = {
    every?: ClickInfoWhereInput
    some?: ClickInfoWhereInput
    none?: ClickInfoWhereInput
  }

  export type ClickInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShortUrlCountOrderByAggregateInput = {
    id?: SortOrder
    shortUrl?: SortOrder
    ownerMail?: SortOrder
  }

  export type ShortUrlAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShortUrlMaxOrderByAggregateInput = {
    id?: SortOrder
    shortUrl?: SortOrder
    ownerMail?: SortOrder
  }

  export type ShortUrlMinOrderByAggregateInput = {
    id?: SortOrder
    shortUrl?: SortOrder
    ownerMail?: SortOrder
  }

  export type ShortUrlSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ShortUrlScalarRelationFilter = {
    is?: ShortUrlWhereInput
    isNot?: ShortUrlWhereInput
  }

  export type ClickInfoCountOrderByAggregateInput = {
    id?: SortOrder
    deviceType?: SortOrder
    city?: SortOrder
    country?: SortOrder
    referer?: SortOrder
    shortUrl?: SortOrder
    clickDate?: SortOrder
  }

  export type ClickInfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClickInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceType?: SortOrder
    city?: SortOrder
    country?: SortOrder
    referer?: SortOrder
    shortUrl?: SortOrder
    clickDate?: SortOrder
  }

  export type ClickInfoMinOrderByAggregateInput = {
    id?: SortOrder
    deviceType?: SortOrder
    city?: SortOrder
    country?: SortOrder
    referer?: SortOrder
    shortUrl?: SortOrder
    clickDate?: SortOrder
  }

  export type ClickInfoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ClickInfoCreateNestedManyWithoutUrlInput = {
    create?: XOR<ClickInfoCreateWithoutUrlInput, ClickInfoUncheckedCreateWithoutUrlInput> | ClickInfoCreateWithoutUrlInput[] | ClickInfoUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: ClickInfoCreateOrConnectWithoutUrlInput | ClickInfoCreateOrConnectWithoutUrlInput[]
    createMany?: ClickInfoCreateManyUrlInputEnvelope
    connect?: ClickInfoWhereUniqueInput | ClickInfoWhereUniqueInput[]
  }

  export type ClickInfoUncheckedCreateNestedManyWithoutUrlInput = {
    create?: XOR<ClickInfoCreateWithoutUrlInput, ClickInfoUncheckedCreateWithoutUrlInput> | ClickInfoCreateWithoutUrlInput[] | ClickInfoUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: ClickInfoCreateOrConnectWithoutUrlInput | ClickInfoCreateOrConnectWithoutUrlInput[]
    createMany?: ClickInfoCreateManyUrlInputEnvelope
    connect?: ClickInfoWhereUniqueInput | ClickInfoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ClickInfoUpdateManyWithoutUrlNestedInput = {
    create?: XOR<ClickInfoCreateWithoutUrlInput, ClickInfoUncheckedCreateWithoutUrlInput> | ClickInfoCreateWithoutUrlInput[] | ClickInfoUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: ClickInfoCreateOrConnectWithoutUrlInput | ClickInfoCreateOrConnectWithoutUrlInput[]
    upsert?: ClickInfoUpsertWithWhereUniqueWithoutUrlInput | ClickInfoUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: ClickInfoCreateManyUrlInputEnvelope
    set?: ClickInfoWhereUniqueInput | ClickInfoWhereUniqueInput[]
    disconnect?: ClickInfoWhereUniqueInput | ClickInfoWhereUniqueInput[]
    delete?: ClickInfoWhereUniqueInput | ClickInfoWhereUniqueInput[]
    connect?: ClickInfoWhereUniqueInput | ClickInfoWhereUniqueInput[]
    update?: ClickInfoUpdateWithWhereUniqueWithoutUrlInput | ClickInfoUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: ClickInfoUpdateManyWithWhereWithoutUrlInput | ClickInfoUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: ClickInfoScalarWhereInput | ClickInfoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClickInfoUncheckedUpdateManyWithoutUrlNestedInput = {
    create?: XOR<ClickInfoCreateWithoutUrlInput, ClickInfoUncheckedCreateWithoutUrlInput> | ClickInfoCreateWithoutUrlInput[] | ClickInfoUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: ClickInfoCreateOrConnectWithoutUrlInput | ClickInfoCreateOrConnectWithoutUrlInput[]
    upsert?: ClickInfoUpsertWithWhereUniqueWithoutUrlInput | ClickInfoUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: ClickInfoCreateManyUrlInputEnvelope
    set?: ClickInfoWhereUniqueInput | ClickInfoWhereUniqueInput[]
    disconnect?: ClickInfoWhereUniqueInput | ClickInfoWhereUniqueInput[]
    delete?: ClickInfoWhereUniqueInput | ClickInfoWhereUniqueInput[]
    connect?: ClickInfoWhereUniqueInput | ClickInfoWhereUniqueInput[]
    update?: ClickInfoUpdateWithWhereUniqueWithoutUrlInput | ClickInfoUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: ClickInfoUpdateManyWithWhereWithoutUrlInput | ClickInfoUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: ClickInfoScalarWhereInput | ClickInfoScalarWhereInput[]
  }

  export type ShortUrlCreateNestedOneWithoutClickInfoInput = {
    create?: XOR<ShortUrlCreateWithoutClickInfoInput, ShortUrlUncheckedCreateWithoutClickInfoInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutClickInfoInput
    connect?: ShortUrlWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShortUrlUpdateOneRequiredWithoutClickInfoNestedInput = {
    create?: XOR<ShortUrlCreateWithoutClickInfoInput, ShortUrlUncheckedCreateWithoutClickInfoInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutClickInfoInput
    upsert?: ShortUrlUpsertWithoutClickInfoInput
    connect?: ShortUrlWhereUniqueInput
    update?: XOR<XOR<ShortUrlUpdateToOneWithWhereWithoutClickInfoInput, ShortUrlUpdateWithoutClickInfoInput>, ShortUrlUncheckedUpdateWithoutClickInfoInput>
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

  export type ClickInfoCreateWithoutUrlInput = {
    deviceType: string
    city: string
    country: string
    referer: string
    clickDate: Date | string
  }

  export type ClickInfoUncheckedCreateWithoutUrlInput = {
    id?: number
    deviceType: string
    city: string
    country: string
    referer: string
    clickDate: Date | string
  }

  export type ClickInfoCreateOrConnectWithoutUrlInput = {
    where: ClickInfoWhereUniqueInput
    create: XOR<ClickInfoCreateWithoutUrlInput, ClickInfoUncheckedCreateWithoutUrlInput>
  }

  export type ClickInfoCreateManyUrlInputEnvelope = {
    data: ClickInfoCreateManyUrlInput | ClickInfoCreateManyUrlInput[]
    skipDuplicates?: boolean
  }

  export type ClickInfoUpsertWithWhereUniqueWithoutUrlInput = {
    where: ClickInfoWhereUniqueInput
    update: XOR<ClickInfoUpdateWithoutUrlInput, ClickInfoUncheckedUpdateWithoutUrlInput>
    create: XOR<ClickInfoCreateWithoutUrlInput, ClickInfoUncheckedCreateWithoutUrlInput>
  }

  export type ClickInfoUpdateWithWhereUniqueWithoutUrlInput = {
    where: ClickInfoWhereUniqueInput
    data: XOR<ClickInfoUpdateWithoutUrlInput, ClickInfoUncheckedUpdateWithoutUrlInput>
  }

  export type ClickInfoUpdateManyWithWhereWithoutUrlInput = {
    where: ClickInfoScalarWhereInput
    data: XOR<ClickInfoUpdateManyMutationInput, ClickInfoUncheckedUpdateManyWithoutUrlInput>
  }

  export type ClickInfoScalarWhereInput = {
    AND?: ClickInfoScalarWhereInput | ClickInfoScalarWhereInput[]
    OR?: ClickInfoScalarWhereInput[]
    NOT?: ClickInfoScalarWhereInput | ClickInfoScalarWhereInput[]
    id?: IntFilter<"ClickInfo"> | number
    deviceType?: StringFilter<"ClickInfo"> | string
    city?: StringFilter<"ClickInfo"> | string
    country?: StringFilter<"ClickInfo"> | string
    referer?: StringFilter<"ClickInfo"> | string
    shortUrl?: StringFilter<"ClickInfo"> | string
    clickDate?: DateTimeFilter<"ClickInfo"> | Date | string
  }

  export type ShortUrlCreateWithoutClickInfoInput = {
    shortUrl: string
    ownerMail: string
  }

  export type ShortUrlUncheckedCreateWithoutClickInfoInput = {
    id?: number
    shortUrl: string
    ownerMail: string
  }

  export type ShortUrlCreateOrConnectWithoutClickInfoInput = {
    where: ShortUrlWhereUniqueInput
    create: XOR<ShortUrlCreateWithoutClickInfoInput, ShortUrlUncheckedCreateWithoutClickInfoInput>
  }

  export type ShortUrlUpsertWithoutClickInfoInput = {
    update: XOR<ShortUrlUpdateWithoutClickInfoInput, ShortUrlUncheckedUpdateWithoutClickInfoInput>
    create: XOR<ShortUrlCreateWithoutClickInfoInput, ShortUrlUncheckedCreateWithoutClickInfoInput>
    where?: ShortUrlWhereInput
  }

  export type ShortUrlUpdateToOneWithWhereWithoutClickInfoInput = {
    where?: ShortUrlWhereInput
    data: XOR<ShortUrlUpdateWithoutClickInfoInput, ShortUrlUncheckedUpdateWithoutClickInfoInput>
  }

  export type ShortUrlUpdateWithoutClickInfoInput = {
    shortUrl?: StringFieldUpdateOperationsInput | string
    ownerMail?: StringFieldUpdateOperationsInput | string
  }

  export type ShortUrlUncheckedUpdateWithoutClickInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    shortUrl?: StringFieldUpdateOperationsInput | string
    ownerMail?: StringFieldUpdateOperationsInput | string
  }

  export type ClickInfoCreateManyUrlInput = {
    id?: number
    deviceType: string
    city: string
    country: string
    referer: string
    clickDate: Date | string
  }

  export type ClickInfoUpdateWithoutUrlInput = {
    deviceType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    referer?: StringFieldUpdateOperationsInput | string
    clickDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickInfoUncheckedUpdateWithoutUrlInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    referer?: StringFieldUpdateOperationsInput | string
    clickDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickInfoUncheckedUpdateManyWithoutUrlInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceType?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    referer?: StringFieldUpdateOperationsInput | string
    clickDate?: DateTimeFieldUpdateOperationsInput | Date | string
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