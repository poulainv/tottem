import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | undefined
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    DateTime: any
}

export type BooleanFilter = {
    equals?: Maybe<Scalars['Boolean']>
    not?: Maybe<Scalars['Boolean']>
}

export type Collection = {
    __typename?: 'Collection'
    id: Scalars['ID']
    slug: Scalars['String']
    name?: Maybe<Scalars['String']>
    createdAt: Scalars['DateTime']
    updatedAt: Scalars['DateTime']
    isDeleted: Scalars['Boolean']
    detail?: Maybe<Scalars['String']>
    items: Array<Item>
    owner: User
    section: Section
}

export type CollectionItemsArgs = {
    where?: Maybe<CollectionItemsWhereInput>
    orderBy?: Maybe<CollectionItemsOrderByInput>
    skip?: Maybe<Scalars['Int']>
    after?: Maybe<Scalars['ID']>
    before?: Maybe<Scalars['ID']>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
}

export type CollectionCreateManyWithoutCollectionsInput = {
    create?: Maybe<Array<CollectionCreateWithoutSectionInput>>
    connect?: Maybe<Array<CollectionWhereUniqueInput>>
}

export type CollectionCreateOneWithoutCollectionInput = {
    create?: Maybe<CollectionCreateWithoutItemsInput>
    connect?: Maybe<CollectionWhereUniqueInput>
}

export type CollectionCreateWithoutItemsInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug: Scalars['String']
    name?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    detail?: Maybe<Scalars['String']>
    section: SectionCreateOneWithoutSectionInput
    owner: UserCreateOneWithoutOwnerInput
}

export type CollectionCreateWithoutOwnerInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug: Scalars['String']
    name?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    detail?: Maybe<Scalars['String']>
    items?: Maybe<ItemCreateManyWithoutItemsInput>
    section: SectionCreateOneWithoutSectionInput
}

export type CollectionCreateWithoutSectionInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug: Scalars['String']
    name?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    detail?: Maybe<Scalars['String']>
    items?: Maybe<ItemCreateManyWithoutItemsInput>
    owner: UserCreateOneWithoutOwnerInput
}

export type CollectionFilter = {
    every?: Maybe<CollectionWhereInput>
    some?: Maybe<CollectionWhereInput>
    none?: Maybe<CollectionWhereInput>
}

export type CollectionItemsOrderByInput = {
    position?: Maybe<OrderByArg>
}

export type CollectionItemsWhereInput = {
    isDeleted?: Maybe<BooleanFilter>
}

export type CollectionScalarWhereInput = {
    id?: Maybe<StringFilter>
    createdAt?: Maybe<DateTimeFilter>
    updatedAt?: Maybe<DateTimeFilter>
    slug?: Maybe<StringFilter>
    name?: Maybe<NullableStringFilter>
    isDeleted?: Maybe<BooleanFilter>
    detail?: Maybe<NullableStringFilter>
    items?: Maybe<ItemFilter>
    AND?: Maybe<Array<CollectionScalarWhereInput>>
    OR?: Maybe<Array<CollectionScalarWhereInput>>
    NOT?: Maybe<Array<CollectionScalarWhereInput>>
}

export type CollectionUpdateInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    detail?: Maybe<Scalars['String']>
    items?: Maybe<ItemUpdateManyWithoutCollectionInput>
    section?: Maybe<SectionUpdateOneRequiredWithoutCollectionsInput>
    owner?: Maybe<UserUpdateOneRequiredWithoutCollectionsInput>
}

export type CollectionUpdateManyDataInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    detail?: Maybe<Scalars['String']>
}

export type CollectionUpdateManyWithoutOwnerInput = {
    create?: Maybe<Array<CollectionCreateWithoutOwnerInput>>
    connect?: Maybe<Array<CollectionWhereUniqueInput>>
    set?: Maybe<Array<CollectionWhereUniqueInput>>
    disconnect?: Maybe<Array<CollectionWhereUniqueInput>>
    delete?: Maybe<Array<CollectionWhereUniqueInput>>
    update?: Maybe<Array<CollectionUpdateWithWhereUniqueWithoutOwnerInput>>
    updateMany?: Maybe<Array<CollectionUpdateManyWithWhereNestedInput>>
    deleteMany?: Maybe<Array<CollectionScalarWhereInput>>
    upsert?: Maybe<Array<CollectionUpsertWithWhereUniqueWithoutOwnerInput>>
}

export type CollectionUpdateManyWithoutSectionInput = {
    create?: Maybe<Array<CollectionCreateWithoutSectionInput>>
    connect?: Maybe<Array<CollectionWhereUniqueInput>>
    set?: Maybe<Array<CollectionWhereUniqueInput>>
    disconnect?: Maybe<Array<CollectionWhereUniqueInput>>
    delete?: Maybe<Array<CollectionWhereUniqueInput>>
    update?: Maybe<Array<CollectionUpdateWithWhereUniqueWithoutSectionInput>>
    updateMany?: Maybe<Array<CollectionUpdateManyWithWhereNestedInput>>
    deleteMany?: Maybe<Array<CollectionScalarWhereInput>>
    upsert?: Maybe<Array<CollectionUpsertWithWhereUniqueWithoutSectionInput>>
}

export type CollectionUpdateManyWithWhereNestedInput = {
    where: CollectionScalarWhereInput
    data: CollectionUpdateManyDataInput
}

export type CollectionUpdateOneWithoutItemsInput = {
    create?: Maybe<CollectionCreateWithoutItemsInput>
    connect?: Maybe<CollectionWhereUniqueInput>
    disconnect?: Maybe<Scalars['Boolean']>
    delete?: Maybe<Scalars['Boolean']>
    update?: Maybe<CollectionUpdateWithoutItemsDataInput>
    upsert?: Maybe<CollectionUpsertWithoutItemsInput>
}

export type CollectionUpdateWithoutItemsDataInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    detail?: Maybe<Scalars['String']>
    section?: Maybe<SectionUpdateOneRequiredWithoutCollectionsInput>
    owner?: Maybe<UserUpdateOneRequiredWithoutCollectionsInput>
}

export type CollectionUpdateWithoutOwnerDataInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    detail?: Maybe<Scalars['String']>
    items?: Maybe<ItemUpdateManyWithoutCollectionInput>
    section?: Maybe<SectionUpdateOneRequiredWithoutCollectionsInput>
}

export type CollectionUpdateWithoutSectionDataInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    detail?: Maybe<Scalars['String']>
    items?: Maybe<ItemUpdateManyWithoutCollectionInput>
    owner?: Maybe<UserUpdateOneRequiredWithoutCollectionsInput>
}

export type CollectionUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CollectionWhereUniqueInput
    data: CollectionUpdateWithoutOwnerDataInput
}

export type CollectionUpdateWithWhereUniqueWithoutSectionInput = {
    where: CollectionWhereUniqueInput
    data: CollectionUpdateWithoutSectionDataInput
}

export type CollectionUpsertWithoutItemsInput = {
    update: CollectionUpdateWithoutItemsDataInput
    create: CollectionCreateWithoutItemsInput
}

export type CollectionUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CollectionWhereUniqueInput
    update: CollectionUpdateWithoutOwnerDataInput
    create: CollectionCreateWithoutOwnerInput
}

export type CollectionUpsertWithWhereUniqueWithoutSectionInput = {
    where: CollectionWhereUniqueInput
    update: CollectionUpdateWithoutSectionDataInput
    create: CollectionCreateWithoutSectionInput
}

export type CollectionWhereInput = {
    id?: Maybe<StringFilter>
    createdAt?: Maybe<DateTimeFilter>
    updatedAt?: Maybe<DateTimeFilter>
    slug?: Maybe<StringFilter>
    name?: Maybe<NullableStringFilter>
    isDeleted?: Maybe<BooleanFilter>
    detail?: Maybe<NullableStringFilter>
    items?: Maybe<ItemFilter>
    AND?: Maybe<Array<CollectionWhereInput>>
    OR?: Maybe<Array<CollectionWhereInput>>
    NOT?: Maybe<Array<CollectionWhereInput>>
    section?: Maybe<SectionWhereInput>
    owner?: Maybe<UserWhereInput>
}

export type CollectionWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>
    slug?: Maybe<Scalars['String']>
}

export type DateTimeFilter = {
    equals?: Maybe<Scalars['DateTime']>
    not?: Maybe<Scalars['DateTime']>
    in?: Maybe<Array<Scalars['DateTime']>>
    notIn?: Maybe<Array<Scalars['DateTime']>>
    lt?: Maybe<Scalars['DateTime']>
    lte?: Maybe<Scalars['DateTime']>
    gt?: Maybe<Scalars['DateTime']>
    gte?: Maybe<Scalars['DateTime']>
}

export type Inbox = {
    __typename?: 'Inbox'
    id: Scalars['String']
    count: Scalars['Int']
    items: Array<Item>
}

export type IntFilter = {
    equals?: Maybe<Scalars['Int']>
    not?: Maybe<Scalars['Int']>
    in?: Maybe<Array<Scalars['Int']>>
    notIn?: Maybe<Array<Scalars['Int']>>
    lt?: Maybe<Scalars['Int']>
    lte?: Maybe<Scalars['Int']>
    gt?: Maybe<Scalars['Int']>
    gte?: Maybe<Scalars['Int']>
}

export type Item = {
    __typename?: 'Item'
    id: Scalars['ID']
    author?: Maybe<Scalars['String']>
    isDeleted: Scalars['Boolean']
    title: Scalars['String']
    position: Scalars['Int']
    imageUrl?: Maybe<Scalars['String']>
    productUrl?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    comment?: Maybe<Scalars['String']>
    type: ItemType
    meta?: Maybe<Scalars['String']>
    createdAt: Scalars['DateTime']
}

export type ItemCreateManyWithoutInboxedItemsInput = {
    create?: Maybe<Array<ItemCreateWithoutInboxOwnerInput>>
    connect?: Maybe<Array<ItemWhereUniqueInput>>
}

export type ItemCreateManyWithoutItemsInput = {
    create?: Maybe<Array<ItemCreateWithoutCollectionInput>>
    connect?: Maybe<Array<ItemWhereUniqueInput>>
}

export type ItemCreateWithoutCollectionInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    isDeleted?: Maybe<Scalars['Boolean']>
    position?: Maybe<Scalars['Int']>
    title: Scalars['String']
    provider?: Maybe<Scalars['String']>
    author?: Maybe<Scalars['String']>
    type: ItemType
    productUrl?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    comment?: Maybe<Scalars['String']>
    meta?: Maybe<Scalars['String']>
    inboxOwner?: Maybe<UserCreateOneWithoutInboxOwnerInput>
}

export type ItemCreateWithoutInboxOwnerInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    isDeleted?: Maybe<Scalars['Boolean']>
    position?: Maybe<Scalars['Int']>
    title: Scalars['String']
    provider?: Maybe<Scalars['String']>
    author?: Maybe<Scalars['String']>
    type: ItemType
    productUrl?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    comment?: Maybe<Scalars['String']>
    meta?: Maybe<Scalars['String']>
    collection?: Maybe<CollectionCreateOneWithoutCollectionInput>
}

export type ItemFilter = {
    every?: Maybe<ItemWhereInput>
    some?: Maybe<ItemWhereInput>
    none?: Maybe<ItemWhereInput>
}

export type ItemScalarWhereInput = {
    id?: Maybe<StringFilter>
    createdAt?: Maybe<DateTimeFilter>
    updatedAt?: Maybe<DateTimeFilter>
    isDeleted?: Maybe<BooleanFilter>
    position?: Maybe<IntFilter>
    title?: Maybe<StringFilter>
    provider?: Maybe<NullableStringFilter>
    author?: Maybe<NullableStringFilter>
    type?: Maybe<ItemType>
    productUrl?: Maybe<NullableStringFilter>
    imageUrl?: Maybe<NullableStringFilter>
    description?: Maybe<NullableStringFilter>
    comment?: Maybe<NullableStringFilter>
    meta?: Maybe<NullableStringFilter>
    AND?: Maybe<Array<ItemScalarWhereInput>>
    OR?: Maybe<Array<ItemScalarWhereInput>>
    NOT?: Maybe<Array<ItemScalarWhereInput>>
}

export enum ItemType {
    Book = 'book',
    Album = 'album',
    Movie = 'movie',
    People = 'people',
    Video = 'video',
    Article = 'article',
    Podcast = 'podcast',
    Repository = 'repository',
    Website = 'website',
}

export type ItemUpdateInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    isDeleted?: Maybe<Scalars['Boolean']>
    position?: Maybe<Scalars['Int']>
    title?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    author?: Maybe<Scalars['String']>
    type?: Maybe<ItemType>
    productUrl?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    comment?: Maybe<Scalars['String']>
    meta?: Maybe<Scalars['String']>
    collection?: Maybe<CollectionUpdateOneWithoutItemsInput>
    inboxOwner?: Maybe<UserUpdateOneWithoutInboxedItemsInput>
}

export type ItemUpdateManyDataInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    isDeleted?: Maybe<Scalars['Boolean']>
    position?: Maybe<Scalars['Int']>
    title?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    author?: Maybe<Scalars['String']>
    type?: Maybe<ItemType>
    productUrl?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    comment?: Maybe<Scalars['String']>
    meta?: Maybe<Scalars['String']>
}

export type ItemUpdateManyWithoutCollectionInput = {
    create?: Maybe<Array<ItemCreateWithoutCollectionInput>>
    connect?: Maybe<Array<ItemWhereUniqueInput>>
    set?: Maybe<Array<ItemWhereUniqueInput>>
    disconnect?: Maybe<Array<ItemWhereUniqueInput>>
    delete?: Maybe<Array<ItemWhereUniqueInput>>
    update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutCollectionInput>>
    updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>
    deleteMany?: Maybe<Array<ItemScalarWhereInput>>
    upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutCollectionInput>>
}

export type ItemUpdateManyWithoutInboxOwnerInput = {
    create?: Maybe<Array<ItemCreateWithoutInboxOwnerInput>>
    connect?: Maybe<Array<ItemWhereUniqueInput>>
    set?: Maybe<Array<ItemWhereUniqueInput>>
    disconnect?: Maybe<Array<ItemWhereUniqueInput>>
    delete?: Maybe<Array<ItemWhereUniqueInput>>
    update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutInboxOwnerInput>>
    updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>
    deleteMany?: Maybe<Array<ItemScalarWhereInput>>
    upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutInboxOwnerInput>>
}

export type ItemUpdateManyWithWhereNestedInput = {
    where: ItemScalarWhereInput
    data: ItemUpdateManyDataInput
}

export type ItemUpdateWithoutCollectionDataInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    isDeleted?: Maybe<Scalars['Boolean']>
    position?: Maybe<Scalars['Int']>
    title?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    author?: Maybe<Scalars['String']>
    type?: Maybe<ItemType>
    productUrl?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    comment?: Maybe<Scalars['String']>
    meta?: Maybe<Scalars['String']>
    inboxOwner?: Maybe<UserUpdateOneWithoutInboxedItemsInput>
}

export type ItemUpdateWithoutInboxOwnerDataInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    isDeleted?: Maybe<Scalars['Boolean']>
    position?: Maybe<Scalars['Int']>
    title?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    author?: Maybe<Scalars['String']>
    type?: Maybe<ItemType>
    productUrl?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    comment?: Maybe<Scalars['String']>
    meta?: Maybe<Scalars['String']>
    collection?: Maybe<CollectionUpdateOneWithoutItemsInput>
}

export type ItemUpdateWithWhereUniqueWithoutCollectionInput = {
    where: ItemWhereUniqueInput
    data: ItemUpdateWithoutCollectionDataInput
}

export type ItemUpdateWithWhereUniqueWithoutInboxOwnerInput = {
    where: ItemWhereUniqueInput
    data: ItemUpdateWithoutInboxOwnerDataInput
}

export type ItemUpsertWithWhereUniqueWithoutCollectionInput = {
    where: ItemWhereUniqueInput
    update: ItemUpdateWithoutCollectionDataInput
    create: ItemCreateWithoutCollectionInput
}

export type ItemUpsertWithWhereUniqueWithoutInboxOwnerInput = {
    where: ItemWhereUniqueInput
    update: ItemUpdateWithoutInboxOwnerDataInput
    create: ItemCreateWithoutInboxOwnerInput
}

export type ItemWhereInput = {
    id?: Maybe<StringFilter>
    createdAt?: Maybe<DateTimeFilter>
    updatedAt?: Maybe<DateTimeFilter>
    isDeleted?: Maybe<BooleanFilter>
    position?: Maybe<IntFilter>
    title?: Maybe<StringFilter>
    provider?: Maybe<NullableStringFilter>
    author?: Maybe<NullableStringFilter>
    type?: Maybe<ItemType>
    productUrl?: Maybe<NullableStringFilter>
    imageUrl?: Maybe<NullableStringFilter>
    description?: Maybe<NullableStringFilter>
    comment?: Maybe<NullableStringFilter>
    meta?: Maybe<NullableStringFilter>
    AND?: Maybe<Array<ItemWhereInput>>
    OR?: Maybe<Array<ItemWhereInput>>
    NOT?: Maybe<Array<ItemWhereInput>>
    collection?: Maybe<CollectionWhereInput>
    inboxOwner?: Maybe<UserWhereInput>
}

export type ItemWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>
}

export type Mutation = {
    __typename?: 'Mutation'
    updateOneSection?: Maybe<Section>
    createOneUser: User
    updateOneItem?: Maybe<Item>
    updateOneCollection?: Maybe<Collection>
    createEmptyCollection: Collection
    createEmptySection: Section
    changeItemPosition: Array<Item>
    createItemFromSearch: Item
    createItemFromUrl: Item
}

export type MutationUpdateOneSectionArgs = {
    data: SectionUpdateInput
    where: SectionWhereUniqueInput
}

export type MutationCreateOneUserArgs = {
    data: UserCreateInput
}

export type MutationUpdateOneItemArgs = {
    data: ItemUpdateInput
    where: ItemWhereUniqueInput
}

export type MutationUpdateOneCollectionArgs = {
    data: CollectionUpdateInput
    where: CollectionWhereUniqueInput
}

export type MutationCreateEmptyCollectionArgs = {
    sectionId: Scalars['ID']
}

export type MutationChangeItemPositionArgs = {
    collectionId: Scalars['ID']
    oldIndex: Scalars['Int']
    newIndex: Scalars['Int']
}

export type MutationCreateItemFromSearchArgs = {
    id: Scalars['String']
    kind: Scalars['String']
    collectionId?: Maybe<Scalars['String']>
    inbox?: Maybe<Scalars['Boolean']>
}

export type MutationCreateItemFromUrlArgs = {
    url: Scalars['String']
    collectionId?: Maybe<Scalars['String']>
    inbox?: Maybe<Scalars['Boolean']>
}

export type NullableStringFilter = {
    equals?: Maybe<Scalars['String']>
    not?: Maybe<Scalars['String']>
    in?: Maybe<Array<Scalars['String']>>
    notIn?: Maybe<Array<Scalars['String']>>
    lt?: Maybe<Scalars['String']>
    lte?: Maybe<Scalars['String']>
    gt?: Maybe<Scalars['String']>
    gte?: Maybe<Scalars['String']>
    contains?: Maybe<Scalars['String']>
    startsWith?: Maybe<Scalars['String']>
    endsWith?: Maybe<Scalars['String']>
}

export enum OrderByArg {
    Asc = 'asc',
    Desc = 'desc',
}

export type Query = {
    __typename?: 'Query'
    user?: Maybe<User>
    collection?: Maybe<Collection>
    section?: Maybe<Section>
    items: Array<Item>
    sections: Array<Section>
    collections: Array<Collection>
    inbox?: Maybe<Inbox>
    search: Array<SearchItem>
}

export type QueryUserArgs = {
    where: UserWhereUniqueInput
}

export type QueryCollectionArgs = {
    where: CollectionWhereUniqueInput
}

export type QuerySectionArgs = {
    where: SectionWhereUniqueInput
}

export type QueryItemsArgs = {
    where?: Maybe<QueryItemsWhereInput>
    orderBy?: Maybe<QueryItemsOrderByInput>
    skip?: Maybe<Scalars['Int']>
    after?: Maybe<Scalars['ID']>
    before?: Maybe<Scalars['ID']>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
}

export type QuerySectionsArgs = {
    where?: Maybe<QuerySectionsWhereInput>
    orderBy?: Maybe<QuerySectionsOrderByInput>
    skip?: Maybe<Scalars['Int']>
    after?: Maybe<Scalars['ID']>
    before?: Maybe<Scalars['ID']>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
}

export type QueryCollectionsArgs = {
    where?: Maybe<QueryCollectionsWhereInput>
    orderBy?: Maybe<QueryCollectionsOrderByInput>
    skip?: Maybe<Scalars['Int']>
    after?: Maybe<Scalars['ID']>
    before?: Maybe<Scalars['ID']>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
}

export type QuerySearchArgs = {
    q: Scalars['String']
    kind: Scalars['String']
}

export type QueryCollectionsOrderByInput = {
    createdAt?: Maybe<OrderByArg>
}

export type QueryCollectionsWhereInput = {
    isDeleted?: Maybe<BooleanFilter>
    section?: Maybe<SectionWhereInput>
    owner?: Maybe<UserWhereInput>
}

export type QueryItemsOrderByInput = {
    position?: Maybe<OrderByArg>
}

export type QueryItemsWhereInput = {
    isDeleted?: Maybe<BooleanFilter>
    collection?: Maybe<CollectionWhereInput>
}

export type QuerySectionsOrderByInput = {
    createdAt?: Maybe<OrderByArg>
}

export type QuerySectionsWhereInput = {
    isDeleted?: Maybe<BooleanFilter>
    owner?: Maybe<UserWhereInput>
}

export type SearchItem = {
    __typename?: 'SearchItem'
    id: Scalars['String']
    title: Scalars['String']
    author?: Maybe<Scalars['String']>
    type: Scalars['String']
}

export type Section = {
    __typename?: 'Section'
    id: Scalars['ID']
    slug: Scalars['String']
    index: Scalars['Int']
    name?: Maybe<Scalars['String']>
    createdAt: Scalars['DateTime']
    collections: Array<Collection>
    isExpanded: Scalars['Boolean']
}

export type SectionCollectionsArgs = {
    where?: Maybe<SectionCollectionsWhereInput>
    orderBy?: Maybe<SectionCollectionsOrderByInput>
    skip?: Maybe<Scalars['Int']>
    after?: Maybe<Scalars['ID']>
    before?: Maybe<Scalars['ID']>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
}

export type SectionCollectionsOrderByInput = {
    createdAt?: Maybe<OrderByArg>
    updatedAt?: Maybe<OrderByArg>
}

export type SectionCollectionsWhereInput = {
    isDeleted?: Maybe<BooleanFilter>
}

export type SectionCreateManyWithoutSectionsInput = {
    create?: Maybe<Array<SectionCreateWithoutOwnerInput>>
    connect?: Maybe<Array<SectionWhereUniqueInput>>
}

export type SectionCreateOneWithoutSectionInput = {
    create?: Maybe<SectionCreateWithoutCollectionsInput>
    connect?: Maybe<SectionWhereUniqueInput>
}

export type SectionCreateWithoutCollectionsInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug: Scalars['String']
    name?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isExpanded?: Maybe<Scalars['Boolean']>
    isDeleted?: Maybe<Scalars['Boolean']>
    owner: UserCreateOneWithoutOwnerInput
}

export type SectionCreateWithoutOwnerInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug: Scalars['String']
    name?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isExpanded?: Maybe<Scalars['Boolean']>
    isDeleted?: Maybe<Scalars['Boolean']>
    collections?: Maybe<CollectionCreateManyWithoutCollectionsInput>
}

export type SectionFilter = {
    every?: Maybe<SectionWhereInput>
    some?: Maybe<SectionWhereInput>
    none?: Maybe<SectionWhereInput>
}

export type SectionScalarWhereInput = {
    id?: Maybe<StringFilter>
    createdAt?: Maybe<DateTimeFilter>
    updatedAt?: Maybe<DateTimeFilter>
    slug?: Maybe<StringFilter>
    name?: Maybe<NullableStringFilter>
    index?: Maybe<IntFilter>
    collections?: Maybe<CollectionFilter>
    isExpanded?: Maybe<BooleanFilter>
    isDeleted?: Maybe<BooleanFilter>
    AND?: Maybe<Array<SectionScalarWhereInput>>
    OR?: Maybe<Array<SectionScalarWhereInput>>
    NOT?: Maybe<Array<SectionScalarWhereInput>>
}

export type SectionUpdateInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isExpanded?: Maybe<Scalars['Boolean']>
    isDeleted?: Maybe<Scalars['Boolean']>
    collections?: Maybe<CollectionUpdateManyWithoutSectionInput>
    owner?: Maybe<UserUpdateOneRequiredWithoutSectionsInput>
}

export type SectionUpdateManyDataInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isExpanded?: Maybe<Scalars['Boolean']>
    isDeleted?: Maybe<Scalars['Boolean']>
}

export type SectionUpdateManyWithoutOwnerInput = {
    create?: Maybe<Array<SectionCreateWithoutOwnerInput>>
    connect?: Maybe<Array<SectionWhereUniqueInput>>
    set?: Maybe<Array<SectionWhereUniqueInput>>
    disconnect?: Maybe<Array<SectionWhereUniqueInput>>
    delete?: Maybe<Array<SectionWhereUniqueInput>>
    update?: Maybe<Array<SectionUpdateWithWhereUniqueWithoutOwnerInput>>
    updateMany?: Maybe<Array<SectionUpdateManyWithWhereNestedInput>>
    deleteMany?: Maybe<Array<SectionScalarWhereInput>>
    upsert?: Maybe<Array<SectionUpsertWithWhereUniqueWithoutOwnerInput>>
}

export type SectionUpdateManyWithWhereNestedInput = {
    where: SectionScalarWhereInput
    data: SectionUpdateManyDataInput
}

export type SectionUpdateOneRequiredWithoutCollectionsInput = {
    create?: Maybe<SectionCreateWithoutCollectionsInput>
    connect?: Maybe<SectionWhereUniqueInput>
    update?: Maybe<SectionUpdateWithoutCollectionsDataInput>
    upsert?: Maybe<SectionUpsertWithoutCollectionsInput>
}

export type SectionUpdateWithoutCollectionsDataInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isExpanded?: Maybe<Scalars['Boolean']>
    isDeleted?: Maybe<Scalars['Boolean']>
    owner?: Maybe<UserUpdateOneRequiredWithoutSectionsInput>
}

export type SectionUpdateWithoutOwnerDataInput = {
    id?: Maybe<Scalars['ID']>
    createdAt?: Maybe<Scalars['DateTime']>
    updatedAt?: Maybe<Scalars['DateTime']>
    slug?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isExpanded?: Maybe<Scalars['Boolean']>
    isDeleted?: Maybe<Scalars['Boolean']>
    collections?: Maybe<CollectionUpdateManyWithoutSectionInput>
}

export type SectionUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SectionWhereUniqueInput
    data: SectionUpdateWithoutOwnerDataInput
}

export type SectionUpsertWithoutCollectionsInput = {
    update: SectionUpdateWithoutCollectionsDataInput
    create: SectionCreateWithoutCollectionsInput
}

export type SectionUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SectionWhereUniqueInput
    update: SectionUpdateWithoutOwnerDataInput
    create: SectionCreateWithoutOwnerInput
}

export type SectionWhereInput = {
    id?: Maybe<StringFilter>
    createdAt?: Maybe<DateTimeFilter>
    updatedAt?: Maybe<DateTimeFilter>
    slug?: Maybe<StringFilter>
    name?: Maybe<NullableStringFilter>
    index?: Maybe<IntFilter>
    collections?: Maybe<CollectionFilter>
    isExpanded?: Maybe<BooleanFilter>
    isDeleted?: Maybe<BooleanFilter>
    AND?: Maybe<Array<SectionWhereInput>>
    OR?: Maybe<Array<SectionWhereInput>>
    NOT?: Maybe<Array<SectionWhereInput>>
    owner?: Maybe<UserWhereInput>
}

export type SectionWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>
}

export type StringFilter = {
    equals?: Maybe<Scalars['String']>
    not?: Maybe<Scalars['String']>
    in?: Maybe<Array<Scalars['String']>>
    notIn?: Maybe<Array<Scalars['String']>>
    lt?: Maybe<Scalars['String']>
    lte?: Maybe<Scalars['String']>
    gt?: Maybe<Scalars['String']>
    gte?: Maybe<Scalars['String']>
    contains?: Maybe<Scalars['String']>
    startsWith?: Maybe<Scalars['String']>
    endsWith?: Maybe<Scalars['String']>
}

export type User = {
    __typename?: 'User'
    id: Scalars['ID']
    slug: Scalars['String']
    authUserId?: Maybe<Scalars['String']>
    biography: Scalars['String']
    pictureUrl: Scalars['String']
    label?: Maybe<Scalars['String']>
    firstname: Scalars['String']
    sections: Array<Section>
    website?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
}

export type UserSectionsArgs = {
    skip?: Maybe<Scalars['Int']>
    after?: Maybe<Scalars['ID']>
    before?: Maybe<Scalars['ID']>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
}

export type UserCreateInput = {
    id?: Maybe<Scalars['ID']>
    authUserId?: Maybe<Scalars['String']>
    slug: Scalars['String']
    createdAt?: Maybe<Scalars['DateTime']>
    firstname: Scalars['String']
    pictureUrl: Scalars['String']
    biography: Scalars['String']
    linkedin?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
    website?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    sections?: Maybe<SectionCreateManyWithoutSectionsInput>
    collections?: Maybe<CollectionCreateManyWithoutCollectionsInput>
    inboxedItems?: Maybe<ItemCreateManyWithoutInboxedItemsInput>
}

export type UserCreateOneWithoutInboxOwnerInput = {
    create?: Maybe<UserCreateWithoutInboxedItemsInput>
    connect?: Maybe<UserWhereUniqueInput>
}

export type UserCreateOneWithoutOwnerInput = {
    create?: Maybe<UserCreateWithoutCollectionsInput>
    connect?: Maybe<UserWhereUniqueInput>
}

export type UserCreateWithoutCollectionsInput = {
    id?: Maybe<Scalars['ID']>
    authUserId?: Maybe<Scalars['String']>
    slug: Scalars['String']
    createdAt?: Maybe<Scalars['DateTime']>
    firstname: Scalars['String']
    pictureUrl: Scalars['String']
    biography: Scalars['String']
    linkedin?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
    website?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    sections?: Maybe<SectionCreateManyWithoutSectionsInput>
    inboxedItems?: Maybe<ItemCreateManyWithoutInboxedItemsInput>
}

export type UserCreateWithoutInboxedItemsInput = {
    id?: Maybe<Scalars['ID']>
    authUserId?: Maybe<Scalars['String']>
    slug: Scalars['String']
    createdAt?: Maybe<Scalars['DateTime']>
    firstname: Scalars['String']
    pictureUrl: Scalars['String']
    biography: Scalars['String']
    linkedin?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
    website?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    sections?: Maybe<SectionCreateManyWithoutSectionsInput>
    collections?: Maybe<CollectionCreateManyWithoutCollectionsInput>
}

export type UserCreateWithoutSectionsInput = {
    id?: Maybe<Scalars['ID']>
    authUserId?: Maybe<Scalars['String']>
    slug: Scalars['String']
    createdAt?: Maybe<Scalars['DateTime']>
    firstname: Scalars['String']
    pictureUrl: Scalars['String']
    biography: Scalars['String']
    linkedin?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
    website?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    collections?: Maybe<CollectionCreateManyWithoutCollectionsInput>
    inboxedItems?: Maybe<ItemCreateManyWithoutInboxedItemsInput>
}

export type UserUpdateOneRequiredWithoutCollectionsInput = {
    create?: Maybe<UserCreateWithoutCollectionsInput>
    connect?: Maybe<UserWhereUniqueInput>
    update?: Maybe<UserUpdateWithoutCollectionsDataInput>
    upsert?: Maybe<UserUpsertWithoutCollectionsInput>
}

export type UserUpdateOneRequiredWithoutSectionsInput = {
    create?: Maybe<UserCreateWithoutSectionsInput>
    connect?: Maybe<UserWhereUniqueInput>
    update?: Maybe<UserUpdateWithoutSectionsDataInput>
    upsert?: Maybe<UserUpsertWithoutSectionsInput>
}

export type UserUpdateOneWithoutInboxedItemsInput = {
    create?: Maybe<UserCreateWithoutInboxedItemsInput>
    connect?: Maybe<UserWhereUniqueInput>
    disconnect?: Maybe<Scalars['Boolean']>
    delete?: Maybe<Scalars['Boolean']>
    update?: Maybe<UserUpdateWithoutInboxedItemsDataInput>
    upsert?: Maybe<UserUpsertWithoutInboxedItemsInput>
}

export type UserUpdateWithoutCollectionsDataInput = {
    id?: Maybe<Scalars['ID']>
    authUserId?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    firstname?: Maybe<Scalars['String']>
    pictureUrl?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
    website?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    sections?: Maybe<SectionUpdateManyWithoutOwnerInput>
    inboxedItems?: Maybe<ItemUpdateManyWithoutInboxOwnerInput>
}

export type UserUpdateWithoutInboxedItemsDataInput = {
    id?: Maybe<Scalars['ID']>
    authUserId?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    firstname?: Maybe<Scalars['String']>
    pictureUrl?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
    website?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    sections?: Maybe<SectionUpdateManyWithoutOwnerInput>
    collections?: Maybe<CollectionUpdateManyWithoutOwnerInput>
}

export type UserUpdateWithoutSectionsDataInput = {
    id?: Maybe<Scalars['ID']>
    authUserId?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    firstname?: Maybe<Scalars['String']>
    pictureUrl?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
    website?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    collections?: Maybe<CollectionUpdateManyWithoutOwnerInput>
    inboxedItems?: Maybe<ItemUpdateManyWithoutInboxOwnerInput>
}

export type UserUpsertWithoutCollectionsInput = {
    update: UserUpdateWithoutCollectionsDataInput
    create: UserCreateWithoutCollectionsInput
}

export type UserUpsertWithoutInboxedItemsInput = {
    update: UserUpdateWithoutInboxedItemsDataInput
    create: UserCreateWithoutInboxedItemsInput
}

export type UserUpsertWithoutSectionsInput = {
    update: UserUpdateWithoutSectionsDataInput
    create: UserCreateWithoutSectionsInput
}

export type UserWhereInput = {
    id?: Maybe<StringFilter>
    authUserId?: Maybe<NullableStringFilter>
    slug?: Maybe<StringFilter>
    createdAt?: Maybe<DateTimeFilter>
    firstname?: Maybe<StringFilter>
    pictureUrl?: Maybe<StringFilter>
    biography?: Maybe<StringFilter>
    linkedin?: Maybe<NullableStringFilter>
    github?: Maybe<NullableStringFilter>
    mail?: Maybe<NullableStringFilter>
    youtube?: Maybe<NullableStringFilter>
    website?: Maybe<NullableStringFilter>
    label?: Maybe<NullableStringFilter>
    sections?: Maybe<SectionFilter>
    collections?: Maybe<CollectionFilter>
    inboxedItems?: Maybe<ItemFilter>
    AND?: Maybe<Array<UserWhereInput>>
    OR?: Maybe<Array<UserWhereInput>>
    NOT?: Maybe<Array<UserWhereInput>>
}

export type UserWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>
    authUserId?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
}

export type GetCollectionPageQueryVariables = {
    slug?: Maybe<Scalars['String']>
    collectionId?: Maybe<Scalars['String']>
}

export type GetCollectionPageQuery = { __typename?: 'Query' } & {
    user: Maybe<{ __typename?: 'User' } & UserBasicFragment>
    collection: Maybe<
        { __typename?: 'Collection' } & Pick<Collection, 'createdAt'> & {
                section: { __typename?: 'Section' } & Pick<Section, 'slug'>
                items: Array<
                    { __typename?: 'Item' } & Pick<
                        Item,
                        | 'id'
                        | 'createdAt'
                        | 'imageUrl'
                        | 'comment'
                        | 'productUrl'
                        | 'provider'
                        | 'title'
                        | 'author'
                        | 'type'
                        | 'meta'
                        | 'position'
                        | 'isDeleted'
                    >
                >
            } & CollectionBasicFragment
    >
}

export type UpdateCollectionMutationVariables = {
    collectionId: Scalars['ID']
    slug: Scalars['String']
    name?: Maybe<Scalars['String']>
    detail?: Maybe<Scalars['String']>
}

export type UpdateCollectionMutation = { __typename?: 'Mutation' } & {
    collection: Maybe<
        { __typename?: 'Collection' } & Pick<
            Collection,
            'id' | 'slug' | 'name' | 'detail'
        >
    >
}

export type GetCollectionIdQueryVariables = {
    collectionId: Scalars['ID']
}

export type GetCollectionIdQuery = { __typename?: 'Query' } & {
    collection: Maybe<
        { __typename?: 'Collection' } & Pick<Collection, 'createdAt'> &
            CollectionBasicFragment
    >
}

export type DeleteCollectionMutationVariables = {
    id: Scalars['ID']
}

export type DeleteCollectionMutation = { __typename?: 'Mutation' } & {
    updateOneCollection: Maybe<
        { __typename?: 'Collection' } & Pick<
            Collection,
            'id' | 'slug' | 'isDeleted'
        > & { section: { __typename?: 'Section' } & Pick<Section, 'id'> }
    >
}

export type UnDeleteCollectionMutationVariables = {
    id: Scalars['ID']
}

export type UnDeleteCollectionMutation = { __typename?: 'Mutation' } & {
    updateOneCollection: Maybe<
        { __typename?: 'Collection' } & Pick<
            Collection,
            'id' | 'slug' | 'isDeleted'
        >
    >
}

export type MoveItemFromCollectionToCollectionMutationVariables = {
    itemId: Scalars['ID']
    collectionId: Scalars['ID']
}

export type MoveItemFromCollectionToCollectionMutation = {
    __typename?: 'Mutation'
} & { updateOneItem: Maybe<{ __typename?: 'Item' } & Pick<Item, 'id'>> }

export type MoveItemFromCollectionToInboxMutationVariables = {
    itemId: Scalars['ID']
    authUserId: Scalars['String']
}

export type MoveItemFromCollectionToInboxMutation = {
    __typename?: 'Mutation'
} & { updateOneItem: Maybe<{ __typename?: 'Item' } & Pick<Item, 'id'>> }

export type GetInboxQueryVariables = {}

export type GetInboxQuery = { __typename?: 'Query' } & {
    inbox: Maybe<
        { __typename?: 'Inbox' } & Pick<Inbox, 'id'> & {
                items: Array<
                    { __typename?: 'Item' } & ItemPreviewFragment &
                        ItemDetailFragment
                >
            }
    >
}

export type MoveItemFromInboxToCollectionMutationVariables = {
    itemId: Scalars['ID']
    collectionId: Scalars['ID']
}

export type MoveItemFromInboxToCollectionMutation = {
    __typename?: 'Mutation'
} & { updateOneItem: Maybe<{ __typename?: 'Item' } & Pick<Item, 'id'>> }

export type GetSectionQueryVariables = {
    sectionId: Scalars['ID']
}

export type GetSectionQuery = { __typename?: 'Query' } & {
    section: Maybe<
        { __typename?: 'Section' } & Pick<Section, 'id' | 'index' | 'slug'> & {
                title: Section['name']
            } & {
                collections: Array<
                    { __typename?: 'Collection' } & Pick<
                        Collection,
                        'id' | 'slug' | 'updatedAt' | 'isDeleted'
                    > & { title: Collection['name'] } & {
                            items: Array<
                                { __typename?: 'Item' } & Pick<
                                    Item,
                                    'imageUrl' | 'isDeleted' | 'title' | 'type'
                                >
                            >
                            owner: { __typename?: 'User' } & Pick<
                                User,
                                'pictureUrl'
                            >
                        }
                >
            }
    >
}

export type DeleteSectionMutationVariables = {
    sectionId: Scalars['ID']
}

export type DeleteSectionMutation = { __typename?: 'Mutation' } & {
    updateOneSection: Maybe<
        { __typename?: 'Section' } & Pick<Section, 'id' | 'slug'> & {
                title: Section['name']
            }
    >
}

export type UpdateSectionMutationVariables = {
    sectionId: Scalars['ID']
    title?: Maybe<Scalars['String']>
}

export type UpdateSectionMutation = { __typename?: 'Mutation' } & {
    updateOneSection: Maybe<
        { __typename?: 'Section' } & Pick<Section, 'id' | 'slug' | 'index'> & {
                title: Section['name']
            }
    >
}

export type CreateEmptyCollectionMutationVariables = {
    sectionId: Scalars['ID']
}

export type CreateEmptyCollectionMutation = { __typename?: 'Mutation' } & {
    collection: { __typename?: 'Collection' } & Pick<
        Collection,
        'id' | 'slug' | 'name'
    >
}

export type CreateItemFromUrlMutationVariables = {
    url: Scalars['String']
    collectionId?: Maybe<Scalars['String']>
    inbox?: Maybe<Scalars['Boolean']>
}

export type CreateItemFromUrlMutation = { __typename?: 'Mutation' } & {
    items: { __typename?: 'Item' } & ItemPreviewFragment & ItemDetailFragment
}

export type CreateItemFromSearchMutationVariables = {
    id: Scalars['String']
    kind: Scalars['String']
    collectionId?: Maybe<Scalars['String']>
    inbox?: Maybe<Scalars['Boolean']>
}

export type CreateItemFromSearchMutation = { __typename?: 'Mutation' } & {
    items: { __typename?: 'Item' } & ItemPreviewFragment & ItemDetailFragment
}

export type SearchItemQueryVariables = {
    query: Scalars['String']
    kind: Scalars['String']
}

export type SearchItemQuery = { __typename?: 'Query' } & {
    search: Array<
        { __typename?: 'SearchItem' } & Pick<
            SearchItem,
            'id' | 'title' | 'author' | 'type'
        >
    >
}

export type DeleteItemMutationVariables = {
    id: Scalars['ID']
}

export type DeleteItemMutation = { __typename?: 'Mutation' } & {
    updateOneItem: Maybe<
        { __typename?: 'Item' } & Pick<Item, 'id' | 'isDeleted'>
    >
}

export type SaveCommentItemMutationVariables = {
    id: Scalars['ID']
    comment: Scalars['String']
}

export type SaveCommentItemMutation = { __typename?: 'Mutation' } & {
    updateOneItem: Maybe<{ __typename?: 'Item' } & Pick<Item, 'id' | 'comment'>>
}

export type UndeleteItemMutationVariables = {
    id: Scalars['ID']
}

export type UndeleteItemMutation = { __typename?: 'Mutation' } & {
    updateOneItem: Maybe<
        { __typename?: 'Item' } & Pick<Item, 'id' | 'isDeleted'>
    >
}

export type ChangePositionMutationVariables = {
    oldIndex: Scalars['Int']
    newIndex: Scalars['Int']
    collectionId: Scalars['ID']
}

export type ChangePositionMutation = { __typename?: 'Mutation' } & {
    changeItemPosition: Array<
        { __typename?: 'Item' } & Pick<Item, 'id' | 'position'>
    >
}

export type GetItemsQueryVariables = {
    collectionId: Scalars['String']
}

export type GetItemsQuery = { __typename?: 'Query' } & {
    items: Array<
        { __typename?: 'Item' } & ItemPreviewFragment & ItemDetailFragment
    >
}

export type GetCollectionModalQueryVariables = {
    authUserId: Scalars['String']
}

export type GetCollectionModalQuery = { __typename?: 'Query' } & {
    collections: Array<
        { __typename?: 'Collection' } & Pick<Collection, 'id'> & {
                title: Collection['name']
            }
    >
}

export type GetSectionsQueryVariables = {
    authUserId: Scalars['String']
}

export type GetSectionsQuery = { __typename?: 'Query' } & {
    inbox: Maybe<{ __typename?: 'Inbox' } & Pick<Inbox, 'id' | 'count'>>
    sections: Array<
        { __typename?: 'Section' } & Pick<
            Section,
            'id' | 'createdAt' | 'isExpanded'
        > & { title: Section['name'] } & {
                collections: Array<
                    { __typename?: 'Collection' } & Pick<
                        Collection,
                        'id' | 'slug' | 'isDeleted'
                    > & { title: Collection['name'] }
                >
            }
    >
}

export type CreateSectionMutationVariables = {}

export type CreateSectionMutation = { __typename?: 'Mutation' } & {
    createEmptySection: { __typename?: 'Section' } & Pick<
        Section,
        'id' | 'slug' | 'createdAt' | 'index' | 'isExpanded'
    > & { title: Section['name'] } & {
            collections: Array<
                { __typename?: 'Collection' } & Pick<
                    Collection,
                    'id' | 'slug' | 'isDeleted'
                > & { title: Collection['name'] }
            >
        }
}

export type UpdateSectionExpandedMutationVariables = {
    isExpanded: Scalars['Boolean']
    sectionId: Scalars['ID']
}

export type UpdateSectionExpandedMutation = { __typename?: 'Mutation' } & {
    updateOneSection: Maybe<
        { __typename?: 'Section' } & Pick<Section, 'id' | 'isExpanded'>
    >
}

export type GetCollectionQueryVariables = {
    profileSlug?: Maybe<Scalars['String']>
    sectionSlug?: Maybe<Scalars['String']>
    sectionIndex?: Maybe<Scalars['Int']>
}

export type GetCollectionQuery = { __typename?: 'Query' } & {
    collections: Array<
        { __typename?: 'Collection' } & Pick<Collection, 'createdAt'> & {
                items: Array<{ __typename?: 'Item' } & ItemPreviewFragment>
            } & CollectionBasicFragment
    >
}

export type GetProfileQueryVariables = {
    slug?: Maybe<Scalars['String']>
}

export type GetProfileQuery = { __typename?: 'Query' } & {
    user: Maybe<{ __typename?: 'User' } & UserBasicFragment & SocialFragment>
    sections: Array<
        { __typename?: 'Section' } & Pick<
            Section,
            'id' | 'slug' | 'name' | 'index'
        >
    >
}

export type GetUserBySlugQueryVariables = {
    slug: Scalars['String']
}

export type GetUserBySlugQuery = { __typename?: 'Query' } & {
    user: Maybe<{ __typename?: 'User' } & UserBasicFragment>
}

export type GetUserByAuthIdQueryVariables = {
    authId: Scalars['String']
}

export type GetUserByAuthIdQuery = { __typename?: 'Query' } & {
    user: Maybe<{ __typename?: 'User' } & UserBasicFragment>
}

export type CreateUserMutationVariables = {
    slug: Scalars['String']
    authUserId: Scalars['String']
    pictureUrl: Scalars['String']
    biography: Scalars['String']
}

export type CreateUserMutation = { __typename?: 'Mutation' } & {
    user: { __typename?: 'User' } & UserBasicFragment
}

export type ItemPreviewFragment = { __typename?: 'Item' } & Pick<
    Item,
    | 'id'
    | 'imageUrl'
    | 'title'
    | 'author'
    | 'type'
    | 'isDeleted'
    | 'position'
    | 'createdAt'
>

export type ItemDetailFragment = { __typename?: 'Item' } & Pick<
    Item,
    'productUrl' | 'provider' | 'meta' | 'comment' | 'description'
>

export type CollectionBasicFragment = { __typename?: 'Collection' } & Pick<
    Collection,
    'id' | 'slug' | 'name' | 'detail'
>

export type UserBasicFragment = { __typename?: 'User' } & Pick<
    User,
    | 'id'
    | 'slug'
    | 'authUserId'
    | 'firstname'
    | 'pictureUrl'
    | 'biography'
    | 'label'
>

export type SocialFragment = { __typename?: 'User' } & Pick<
    User,
    'mail' | 'linkedin' | 'youtube' | 'website' | 'github'
>

export type InboxCountItemFragment = { __typename?: 'Inbox' } & Pick<
    Inbox,
    'count'
>

export const ItemPreviewFragmentDoc = gql`
    fragment ItemPreview on Item {
        id
        imageUrl
        title
        author
        type
        isDeleted
        position
        createdAt
    }
`
export const ItemDetailFragmentDoc = gql`
    fragment ItemDetail on Item {
        productUrl
        provider
        meta
        comment
        description
    }
`
export const CollectionBasicFragmentDoc = gql`
    fragment CollectionBasic on Collection {
        id
        slug
        name
        detail
    }
`
export const UserBasicFragmentDoc = gql`
    fragment UserBasic on User {
        id
        slug
        authUserId
        firstname
        pictureUrl
        biography
        label
    }
`
export const SocialFragmentDoc = gql`
    fragment Social on User {
        mail
        linkedin
        youtube
        website
        github
    }
`
export const InboxCountItemFragmentDoc = gql`
    fragment InboxCountItem on Inbox {
        count
    }
`
export const GetCollectionPageDocument = gql`
    query getCollectionPage($slug: String, $collectionId: String) {
        user(where: { slug: $slug }) {
            ...UserBasic
        }
        collection(where: { slug: $collectionId }) {
            ...CollectionBasic
            createdAt
            section {
                slug
            }
            items(where: { isDeleted: { equals: false } }) {
                id
                createdAt
                imageUrl
                comment
                productUrl
                provider
                title
                author
                type
                meta
                position
                isDeleted
            }
        }
    }
    ${UserBasicFragmentDoc}
    ${CollectionBasicFragmentDoc}
`

/**
 * __useGetCollectionPageQuery__
 *
 * To run a query within a React component, call `useGetCollectionPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useGetCollectionPageQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetCollectionPageQuery,
        GetCollectionPageQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetCollectionPageQuery,
        GetCollectionPageQueryVariables
    >(GetCollectionPageDocument, baseOptions)
}
export function useGetCollectionPageLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetCollectionPageQuery,
        GetCollectionPageQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetCollectionPageQuery,
        GetCollectionPageQueryVariables
    >(GetCollectionPageDocument, baseOptions)
}
export type GetCollectionPageQueryHookResult = ReturnType<
    typeof useGetCollectionPageQuery
>
export type GetCollectionPageLazyQueryHookResult = ReturnType<
    typeof useGetCollectionPageLazyQuery
>
export type GetCollectionPageQueryResult = ApolloReactCommon.QueryResult<
    GetCollectionPageQuery,
    GetCollectionPageQueryVariables
>
export const UpdateCollectionDocument = gql`
    mutation UpdateCollection(
        $collectionId: ID!
        $slug: String!
        $name: String
        $detail: String
    ) {
        collection: updateOneCollection(
            where: { id: $collectionId }
            data: { name: $name, detail: $detail, slug: $slug }
        ) {
            id
            slug
            name
            detail
        }
    }
`

/**
 * __useUpdateCollectionMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionMutation, { data, loading, error }] = useUpdateCollectionMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      slug: // value for 'slug'
 *      name: // value for 'name'
 *      detail: // value for 'detail'
 *   },
 * });
 */
export function useUpdateCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UpdateCollectionMutation,
        UpdateCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UpdateCollectionMutation,
        UpdateCollectionMutationVariables
    >(UpdateCollectionDocument, baseOptions)
}
export type UpdateCollectionMutationHookResult = ReturnType<
    typeof useUpdateCollectionMutation
>
export type UpdateCollectionMutationResult = ApolloReactCommon.MutationResult<
    UpdateCollectionMutation
>
export type UpdateCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UpdateCollectionMutation,
    UpdateCollectionMutationVariables
>
export const GetCollectionIdDocument = gql`
    query getCollectionId($collectionId: ID!) {
        collection(where: { id: $collectionId }) {
            ...CollectionBasic
            createdAt
        }
    }
    ${CollectionBasicFragmentDoc}
`

/**
 * __useGetCollectionIdQuery__
 *
 * To run a query within a React component, call `useGetCollectionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionIdQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useGetCollectionIdQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetCollectionIdQuery,
        GetCollectionIdQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetCollectionIdQuery,
        GetCollectionIdQueryVariables
    >(GetCollectionIdDocument, baseOptions)
}
export function useGetCollectionIdLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetCollectionIdQuery,
        GetCollectionIdQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetCollectionIdQuery,
        GetCollectionIdQueryVariables
    >(GetCollectionIdDocument, baseOptions)
}
export type GetCollectionIdQueryHookResult = ReturnType<
    typeof useGetCollectionIdQuery
>
export type GetCollectionIdLazyQueryHookResult = ReturnType<
    typeof useGetCollectionIdLazyQuery
>
export type GetCollectionIdQueryResult = ApolloReactCommon.QueryResult<
    GetCollectionIdQuery,
    GetCollectionIdQueryVariables
>
export const DeleteCollectionDocument = gql`
    mutation deleteCollection($id: ID!) {
        updateOneCollection(data: { isDeleted: true }, where: { id: $id }) {
            id
            slug
            isDeleted
            section {
                id
            }
        }
    }
`

/**
 * __useDeleteCollectionMutation__
 *
 * To run a mutation, you first call `useDeleteCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCollectionMutation, { data, loading, error }] = useDeleteCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        DeleteCollectionMutation,
        DeleteCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        DeleteCollectionMutation,
        DeleteCollectionMutationVariables
    >(DeleteCollectionDocument, baseOptions)
}
export type DeleteCollectionMutationHookResult = ReturnType<
    typeof useDeleteCollectionMutation
>
export type DeleteCollectionMutationResult = ApolloReactCommon.MutationResult<
    DeleteCollectionMutation
>
export type DeleteCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    DeleteCollectionMutation,
    DeleteCollectionMutationVariables
>
export const UnDeleteCollectionDocument = gql`
    mutation unDeleteCollection($id: ID!) {
        updateOneCollection(data: { isDeleted: false }, where: { id: $id }) {
            id
            slug
            isDeleted
        }
    }
`

/**
 * __useUnDeleteCollectionMutation__
 *
 * To run a mutation, you first call `useUnDeleteCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnDeleteCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unDeleteCollectionMutation, { data, loading, error }] = useUnDeleteCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnDeleteCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UnDeleteCollectionMutation,
        UnDeleteCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UnDeleteCollectionMutation,
        UnDeleteCollectionMutationVariables
    >(UnDeleteCollectionDocument, baseOptions)
}
export type UnDeleteCollectionMutationHookResult = ReturnType<
    typeof useUnDeleteCollectionMutation
>
export type UnDeleteCollectionMutationResult = ApolloReactCommon.MutationResult<
    UnDeleteCollectionMutation
>
export type UnDeleteCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UnDeleteCollectionMutation,
    UnDeleteCollectionMutationVariables
>
export const MoveItemFromCollectionToCollectionDocument = gql`
    mutation moveItemFromCollectionToCollection(
        $itemId: ID!
        $collectionId: ID!
    ) {
        updateOneItem(
            data: { collection: { connect: { id: $collectionId } } }
            where: { id: $itemId }
        ) {
            id
        }
    }
`

/**
 * __useMoveItemFromCollectionToCollectionMutation__
 *
 * To run a mutation, you first call `useMoveItemFromCollectionToCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveItemFromCollectionToCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveItemFromCollectionToCollectionMutation, { data, loading, error }] = useMoveItemFromCollectionToCollectionMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useMoveItemFromCollectionToCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        MoveItemFromCollectionToCollectionMutation,
        MoveItemFromCollectionToCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        MoveItemFromCollectionToCollectionMutation,
        MoveItemFromCollectionToCollectionMutationVariables
    >(MoveItemFromCollectionToCollectionDocument, baseOptions)
}
export type MoveItemFromCollectionToCollectionMutationHookResult = ReturnType<
    typeof useMoveItemFromCollectionToCollectionMutation
>
export type MoveItemFromCollectionToCollectionMutationResult = ApolloReactCommon.MutationResult<
    MoveItemFromCollectionToCollectionMutation
>
export type MoveItemFromCollectionToCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    MoveItemFromCollectionToCollectionMutation,
    MoveItemFromCollectionToCollectionMutationVariables
>
export const MoveItemFromCollectionToInboxDocument = gql`
    mutation moveItemFromCollectionToInbox($itemId: ID!, $authUserId: String!) {
        updateOneItem(
            data: {
                collection: { disconnect: true }
                inboxOwner: { connect: { authUserId: $authUserId } }
            }
            where: { id: $itemId }
        ) {
            id
        }
    }
`

/**
 * __useMoveItemFromCollectionToInboxMutation__
 *
 * To run a mutation, you first call `useMoveItemFromCollectionToInboxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveItemFromCollectionToInboxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveItemFromCollectionToInboxMutation, { data, loading, error }] = useMoveItemFromCollectionToInboxMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useMoveItemFromCollectionToInboxMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        MoveItemFromCollectionToInboxMutation,
        MoveItemFromCollectionToInboxMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        MoveItemFromCollectionToInboxMutation,
        MoveItemFromCollectionToInboxMutationVariables
    >(MoveItemFromCollectionToInboxDocument, baseOptions)
}
export type MoveItemFromCollectionToInboxMutationHookResult = ReturnType<
    typeof useMoveItemFromCollectionToInboxMutation
>
export type MoveItemFromCollectionToInboxMutationResult = ApolloReactCommon.MutationResult<
    MoveItemFromCollectionToInboxMutation
>
export type MoveItemFromCollectionToInboxMutationOptions = ApolloReactCommon.BaseMutationOptions<
    MoveItemFromCollectionToInboxMutation,
    MoveItemFromCollectionToInboxMutationVariables
>
export const GetInboxDocument = gql`
    query getInbox {
        inbox {
            id
            items {
                ...ItemPreview
                ...ItemDetail
            }
        }
    }
    ${ItemPreviewFragmentDoc}
    ${ItemDetailFragmentDoc}
`

/**
 * __useGetInboxQuery__
 *
 * To run a query within a React component, call `useGetInboxQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInboxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInboxQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInboxQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetInboxQuery,
        GetInboxQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<GetInboxQuery, GetInboxQueryVariables>(
        GetInboxDocument,
        baseOptions
    )
}
export function useGetInboxLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetInboxQuery,
        GetInboxQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<GetInboxQuery, GetInboxQueryVariables>(
        GetInboxDocument,
        baseOptions
    )
}
export type GetInboxQueryHookResult = ReturnType<typeof useGetInboxQuery>
export type GetInboxLazyQueryHookResult = ReturnType<
    typeof useGetInboxLazyQuery
>
export type GetInboxQueryResult = ApolloReactCommon.QueryResult<
    GetInboxQuery,
    GetInboxQueryVariables
>
export const MoveItemFromInboxToCollectionDocument = gql`
    mutation moveItemFromInboxToCollection($itemId: ID!, $collectionId: ID!) {
        updateOneItem(
            data: {
                collection: { connect: { id: $collectionId } }
                inboxOwner: { disconnect: true }
            }
            where: { id: $itemId }
        ) {
            id
        }
    }
`

/**
 * __useMoveItemFromInboxToCollectionMutation__
 *
 * To run a mutation, you first call `useMoveItemFromInboxToCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveItemFromInboxToCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveItemFromInboxToCollectionMutation, { data, loading, error }] = useMoveItemFromInboxToCollectionMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useMoveItemFromInboxToCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        MoveItemFromInboxToCollectionMutation,
        MoveItemFromInboxToCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        MoveItemFromInboxToCollectionMutation,
        MoveItemFromInboxToCollectionMutationVariables
    >(MoveItemFromInboxToCollectionDocument, baseOptions)
}
export type MoveItemFromInboxToCollectionMutationHookResult = ReturnType<
    typeof useMoveItemFromInboxToCollectionMutation
>
export type MoveItemFromInboxToCollectionMutationResult = ApolloReactCommon.MutationResult<
    MoveItemFromInboxToCollectionMutation
>
export type MoveItemFromInboxToCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    MoveItemFromInboxToCollectionMutation,
    MoveItemFromInboxToCollectionMutationVariables
>
export const GetSectionDocument = gql`
    query getSection($sectionId: ID!) {
        section(where: { id: $sectionId }) {
            id
            title: name
            index
            slug
            collections(
                where: { isDeleted: { equals: false } }
                orderBy: { createdAt: asc }
            ) {
                id
                slug
                updatedAt
                isDeleted
                title: name
                items(first: 5, where: { isDeleted: { equals: false } }) {
                    imageUrl
                    isDeleted
                    title
                    type
                }
                owner {
                    pictureUrl
                }
            }
        }
    }
`

/**
 * __useGetSectionQuery__
 *
 * To run a query within a React component, call `useGetSectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSectionQuery({
 *   variables: {
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useGetSectionQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetSectionQuery,
        GetSectionQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<GetSectionQuery, GetSectionQueryVariables>(
        GetSectionDocument,
        baseOptions
    )
}
export function useGetSectionLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetSectionQuery,
        GetSectionQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetSectionQuery,
        GetSectionQueryVariables
    >(GetSectionDocument, baseOptions)
}
export type GetSectionQueryHookResult = ReturnType<typeof useGetSectionQuery>
export type GetSectionLazyQueryHookResult = ReturnType<
    typeof useGetSectionLazyQuery
>
export type GetSectionQueryResult = ApolloReactCommon.QueryResult<
    GetSectionQuery,
    GetSectionQueryVariables
>
export const DeleteSectionDocument = gql`
    mutation deleteSection($sectionId: ID!) {
        updateOneSection(data: { isDeleted: true }, where: { id: $sectionId }) {
            id
            slug
            title: name
        }
    }
`

/**
 * __useDeleteSectionMutation__
 *
 * To run a mutation, you first call `useDeleteSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSectionMutation, { data, loading, error }] = useDeleteSectionMutation({
 *   variables: {
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useDeleteSectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        DeleteSectionMutation,
        DeleteSectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        DeleteSectionMutation,
        DeleteSectionMutationVariables
    >(DeleteSectionDocument, baseOptions)
}
export type DeleteSectionMutationHookResult = ReturnType<
    typeof useDeleteSectionMutation
>
export type DeleteSectionMutationResult = ApolloReactCommon.MutationResult<
    DeleteSectionMutation
>
export type DeleteSectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    DeleteSectionMutation,
    DeleteSectionMutationVariables
>
export const UpdateSectionDocument = gql`
    mutation updateSection($sectionId: ID!, $title: String) {
        updateOneSection(data: { name: $title }, where: { id: $sectionId }) {
            id
            slug
            index
            title: name
        }
    }
`

/**
 * __useUpdateSectionMutation__
 *
 * To run a mutation, you first call `useUpdateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSectionMutation, { data, loading, error }] = useUpdateSectionMutation({
 *   variables: {
 *      sectionId: // value for 'sectionId'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateSectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UpdateSectionMutation,
        UpdateSectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UpdateSectionMutation,
        UpdateSectionMutationVariables
    >(UpdateSectionDocument, baseOptions)
}
export type UpdateSectionMutationHookResult = ReturnType<
    typeof useUpdateSectionMutation
>
export type UpdateSectionMutationResult = ApolloReactCommon.MutationResult<
    UpdateSectionMutation
>
export type UpdateSectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UpdateSectionMutation,
    UpdateSectionMutationVariables
>
export const CreateEmptyCollectionDocument = gql`
    mutation CreateEmptyCollection($sectionId: ID!) {
        collection: createEmptyCollection(sectionId: $sectionId) {
            id
            slug
            name
        }
    }
`

/**
 * __useCreateEmptyCollectionMutation__
 *
 * To run a mutation, you first call `useCreateEmptyCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmptyCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmptyCollectionMutation, { data, loading, error }] = useCreateEmptyCollectionMutation({
 *   variables: {
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useCreateEmptyCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateEmptyCollectionMutation,
        CreateEmptyCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        CreateEmptyCollectionMutation,
        CreateEmptyCollectionMutationVariables
    >(CreateEmptyCollectionDocument, baseOptions)
}
export type CreateEmptyCollectionMutationHookResult = ReturnType<
    typeof useCreateEmptyCollectionMutation
>
export type CreateEmptyCollectionMutationResult = ApolloReactCommon.MutationResult<
    CreateEmptyCollectionMutation
>
export type CreateEmptyCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateEmptyCollectionMutation,
    CreateEmptyCollectionMutationVariables
>
export const CreateItemFromUrlDocument = gql`
    mutation CreateItemFromUrl(
        $url: String!
        $collectionId: String
        $inbox: Boolean
    ) {
        items: createItemFromUrl(
            collectionId: $collectionId
            url: $url
            inbox: $inbox
        ) {
            ...ItemPreview
            ...ItemDetail
        }
    }
    ${ItemPreviewFragmentDoc}
    ${ItemDetailFragmentDoc}
`

/**
 * __useCreateItemFromUrlMutation__
 *
 * To run a mutation, you first call `useCreateItemFromUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemFromUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemFromUrlMutation, { data, loading, error }] = useCreateItemFromUrlMutation({
 *   variables: {
 *      url: // value for 'url'
 *      collectionId: // value for 'collectionId'
 *      inbox: // value for 'inbox'
 *   },
 * });
 */
export function useCreateItemFromUrlMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateItemFromUrlMutation,
        CreateItemFromUrlMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        CreateItemFromUrlMutation,
        CreateItemFromUrlMutationVariables
    >(CreateItemFromUrlDocument, baseOptions)
}
export type CreateItemFromUrlMutationHookResult = ReturnType<
    typeof useCreateItemFromUrlMutation
>
export type CreateItemFromUrlMutationResult = ApolloReactCommon.MutationResult<
    CreateItemFromUrlMutation
>
export type CreateItemFromUrlMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateItemFromUrlMutation,
    CreateItemFromUrlMutationVariables
>
export const CreateItemFromSearchDocument = gql`
    mutation CreateItemFromSearch(
        $id: String!
        $kind: String!
        $collectionId: String
        $inbox: Boolean
    ) {
        items: createItemFromSearch(
            collectionId: $collectionId
            id: $id
            kind: $kind
            inbox: $inbox
        ) {
            ...ItemPreview
            ...ItemDetail
        }
    }
    ${ItemPreviewFragmentDoc}
    ${ItemDetailFragmentDoc}
`

/**
 * __useCreateItemFromSearchMutation__
 *
 * To run a mutation, you first call `useCreateItemFromSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemFromSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemFromSearchMutation, { data, loading, error }] = useCreateItemFromSearchMutation({
 *   variables: {
 *      id: // value for 'id'
 *      kind: // value for 'kind'
 *      collectionId: // value for 'collectionId'
 *      inbox: // value for 'inbox'
 *   },
 * });
 */
export function useCreateItemFromSearchMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateItemFromSearchMutation,
        CreateItemFromSearchMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        CreateItemFromSearchMutation,
        CreateItemFromSearchMutationVariables
    >(CreateItemFromSearchDocument, baseOptions)
}
export type CreateItemFromSearchMutationHookResult = ReturnType<
    typeof useCreateItemFromSearchMutation
>
export type CreateItemFromSearchMutationResult = ApolloReactCommon.MutationResult<
    CreateItemFromSearchMutation
>
export type CreateItemFromSearchMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateItemFromSearchMutation,
    CreateItemFromSearchMutationVariables
>
export const SearchItemDocument = gql`
    query SearchItem($query: String!, $kind: String!) {
        search(q: $query, kind: $kind) {
            id
            title
            author
            type
        }
    }
`

/**
 * __useSearchItemQuery__
 *
 * To run a query within a React component, call `useSearchItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchItemQuery({
 *   variables: {
 *      query: // value for 'query'
 *      kind: // value for 'kind'
 *   },
 * });
 */
export function useSearchItemQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        SearchItemQuery,
        SearchItemQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<SearchItemQuery, SearchItemQueryVariables>(
        SearchItemDocument,
        baseOptions
    )
}
export function useSearchItemLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        SearchItemQuery,
        SearchItemQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        SearchItemQuery,
        SearchItemQueryVariables
    >(SearchItemDocument, baseOptions)
}
export type SearchItemQueryHookResult = ReturnType<typeof useSearchItemQuery>
export type SearchItemLazyQueryHookResult = ReturnType<
    typeof useSearchItemLazyQuery
>
export type SearchItemQueryResult = ApolloReactCommon.QueryResult<
    SearchItemQuery,
    SearchItemQueryVariables
>
export const DeleteItemDocument = gql`
    mutation deleteItem($id: ID!) {
        updateOneItem(data: { isDeleted: true }, where: { id: $id }) {
            id
            isDeleted
        }
    }
`

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItemMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        DeleteItemMutation,
        DeleteItemMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        DeleteItemMutation,
        DeleteItemMutationVariables
    >(DeleteItemDocument, baseOptions)
}
export type DeleteItemMutationHookResult = ReturnType<
    typeof useDeleteItemMutation
>
export type DeleteItemMutationResult = ApolloReactCommon.MutationResult<
    DeleteItemMutation
>
export type DeleteItemMutationOptions = ApolloReactCommon.BaseMutationOptions<
    DeleteItemMutation,
    DeleteItemMutationVariables
>
export const SaveCommentItemDocument = gql`
    mutation saveCommentItem($id: ID!, $comment: String!) {
        updateOneItem(data: { comment: $comment }, where: { id: $id }) {
            id
            comment
        }
    }
`

/**
 * __useSaveCommentItemMutation__
 *
 * To run a mutation, you first call `useSaveCommentItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveCommentItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveCommentItemMutation, { data, loading, error }] = useSaveCommentItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useSaveCommentItemMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        SaveCommentItemMutation,
        SaveCommentItemMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        SaveCommentItemMutation,
        SaveCommentItemMutationVariables
    >(SaveCommentItemDocument, baseOptions)
}
export type SaveCommentItemMutationHookResult = ReturnType<
    typeof useSaveCommentItemMutation
>
export type SaveCommentItemMutationResult = ApolloReactCommon.MutationResult<
    SaveCommentItemMutation
>
export type SaveCommentItemMutationOptions = ApolloReactCommon.BaseMutationOptions<
    SaveCommentItemMutation,
    SaveCommentItemMutationVariables
>
export const UndeleteItemDocument = gql`
    mutation undeleteItem($id: ID!) {
        updateOneItem(data: { isDeleted: false }, where: { id: $id }) {
            id
            isDeleted
        }
    }
`

/**
 * __useUndeleteItemMutation__
 *
 * To run a mutation, you first call `useUndeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undeleteItemMutation, { data, loading, error }] = useUndeleteItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUndeleteItemMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UndeleteItemMutation,
        UndeleteItemMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UndeleteItemMutation,
        UndeleteItemMutationVariables
    >(UndeleteItemDocument, baseOptions)
}
export type UndeleteItemMutationHookResult = ReturnType<
    typeof useUndeleteItemMutation
>
export type UndeleteItemMutationResult = ApolloReactCommon.MutationResult<
    UndeleteItemMutation
>
export type UndeleteItemMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UndeleteItemMutation,
    UndeleteItemMutationVariables
>
export const ChangePositionDocument = gql`
    mutation changePosition(
        $oldIndex: Int!
        $newIndex: Int!
        $collectionId: ID!
    ) {
        changeItemPosition(
            oldIndex: $oldIndex
            newIndex: $newIndex
            collectionId: $collectionId
        ) {
            id
            position
        }
    }
`

/**
 * __useChangePositionMutation__
 *
 * To run a mutation, you first call `useChangePositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePositionMutation, { data, loading, error }] = useChangePositionMutation({
 *   variables: {
 *      oldIndex: // value for 'oldIndex'
 *      newIndex: // value for 'newIndex'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useChangePositionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        ChangePositionMutation,
        ChangePositionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        ChangePositionMutation,
        ChangePositionMutationVariables
    >(ChangePositionDocument, baseOptions)
}
export type ChangePositionMutationHookResult = ReturnType<
    typeof useChangePositionMutation
>
export type ChangePositionMutationResult = ApolloReactCommon.MutationResult<
    ChangePositionMutation
>
export type ChangePositionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    ChangePositionMutation,
    ChangePositionMutationVariables
>
export const GetItemsDocument = gql`
    query getItems($collectionId: String!) {
        items(where: { collection: { id: { equals: $collectionId } } }) {
            ...ItemPreview
            ...ItemDetail
        }
    }
    ${ItemPreviewFragmentDoc}
    ${ItemDetailFragmentDoc}
`

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useGetItemsQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetItemsQuery,
        GetItemsQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<GetItemsQuery, GetItemsQueryVariables>(
        GetItemsDocument,
        baseOptions
    )
}
export function useGetItemsLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetItemsQuery,
        GetItemsQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(
        GetItemsDocument,
        baseOptions
    )
}
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>
export type GetItemsLazyQueryHookResult = ReturnType<
    typeof useGetItemsLazyQuery
>
export type GetItemsQueryResult = ApolloReactCommon.QueryResult<
    GetItemsQuery,
    GetItemsQueryVariables
>
export const GetCollectionModalDocument = gql`
    query getCollectionModal($authUserId: String!) {
        collections(
            where: {
                isDeleted: { equals: false }
                owner: { authUserId: { equals: $authUserId } }
            }
        ) {
            id
            title: name
        }
    }
`

/**
 * __useGetCollectionModalQuery__
 *
 * To run a query within a React component, call `useGetCollectionModalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionModalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionModalQuery({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetCollectionModalQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetCollectionModalQuery,
        GetCollectionModalQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetCollectionModalQuery,
        GetCollectionModalQueryVariables
    >(GetCollectionModalDocument, baseOptions)
}
export function useGetCollectionModalLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetCollectionModalQuery,
        GetCollectionModalQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetCollectionModalQuery,
        GetCollectionModalQueryVariables
    >(GetCollectionModalDocument, baseOptions)
}
export type GetCollectionModalQueryHookResult = ReturnType<
    typeof useGetCollectionModalQuery
>
export type GetCollectionModalLazyQueryHookResult = ReturnType<
    typeof useGetCollectionModalLazyQuery
>
export type GetCollectionModalQueryResult = ApolloReactCommon.QueryResult<
    GetCollectionModalQuery,
    GetCollectionModalQueryVariables
>
export const GetSectionsDocument = gql`
    query getSections($authUserId: String!) {
        inbox {
            id
            count
        }
        sections(
            where: {
                isDeleted: { equals: false }
                owner: { authUserId: { equals: $authUserId } }
            }
        ) {
            id
            createdAt
            isExpanded
            title: name
            collections(
                where: { isDeleted: { equals: false } }
                orderBy: { createdAt: asc }
            ) {
                id
                slug
                isDeleted
                title: name
            }
        }
    }
`

/**
 * __useGetSectionsQuery__
 *
 * To run a query within a React component, call `useGetSectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSectionsQuery({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetSectionsQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetSectionsQuery,
        GetSectionsQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetSectionsQuery,
        GetSectionsQueryVariables
    >(GetSectionsDocument, baseOptions)
}
export function useGetSectionsLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetSectionsQuery,
        GetSectionsQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetSectionsQuery,
        GetSectionsQueryVariables
    >(GetSectionsDocument, baseOptions)
}
export type GetSectionsQueryHookResult = ReturnType<typeof useGetSectionsQuery>
export type GetSectionsLazyQueryHookResult = ReturnType<
    typeof useGetSectionsLazyQuery
>
export type GetSectionsQueryResult = ApolloReactCommon.QueryResult<
    GetSectionsQuery,
    GetSectionsQueryVariables
>
export const CreateSectionDocument = gql`
    mutation createSection {
        createEmptySection {
            id
            slug
            createdAt
            title: name
            index
            isExpanded
            collections(where: { isDeleted: { equals: false } }) {
                id
                slug
                isDeleted
                title: name
            }
        }
    }
`

/**
 * __useCreateSectionMutation__
 *
 * To run a mutation, you first call `useCreateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSectionMutation, { data, loading, error }] = useCreateSectionMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateSectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateSectionMutation,
        CreateSectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        CreateSectionMutation,
        CreateSectionMutationVariables
    >(CreateSectionDocument, baseOptions)
}
export type CreateSectionMutationHookResult = ReturnType<
    typeof useCreateSectionMutation
>
export type CreateSectionMutationResult = ApolloReactCommon.MutationResult<
    CreateSectionMutation
>
export type CreateSectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateSectionMutation,
    CreateSectionMutationVariables
>
export const UpdateSectionExpandedDocument = gql`
    mutation updateSectionExpanded($isExpanded: Boolean!, $sectionId: ID!) {
        updateOneSection(
            where: { id: $sectionId }
            data: { isExpanded: $isExpanded }
        ) {
            id
            isExpanded
        }
    }
`

/**
 * __useUpdateSectionExpandedMutation__
 *
 * To run a mutation, you first call `useUpdateSectionExpandedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSectionExpandedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSectionExpandedMutation, { data, loading, error }] = useUpdateSectionExpandedMutation({
 *   variables: {
 *      isExpanded: // value for 'isExpanded'
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useUpdateSectionExpandedMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UpdateSectionExpandedMutation,
        UpdateSectionExpandedMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UpdateSectionExpandedMutation,
        UpdateSectionExpandedMutationVariables
    >(UpdateSectionExpandedDocument, baseOptions)
}
export type UpdateSectionExpandedMutationHookResult = ReturnType<
    typeof useUpdateSectionExpandedMutation
>
export type UpdateSectionExpandedMutationResult = ApolloReactCommon.MutationResult<
    UpdateSectionExpandedMutation
>
export type UpdateSectionExpandedMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UpdateSectionExpandedMutation,
    UpdateSectionExpandedMutationVariables
>
export const GetCollectionDocument = gql`
    query getCollection(
        $profileSlug: String
        $sectionSlug: String
        $sectionIndex: Int
    ) {
        collections(
            where: {
                section: {
                    AND: {
                        OR: [
                            { slug: { equals: $sectionSlug } }
                            { index: { equals: $sectionIndex } }
                        ]
                        owner: { slug: { equals: $profileSlug } }
                    }
                }
            }
        ) {
            ...CollectionBasic
            createdAt
            items(first: 4, where: { isDeleted: { equals: false } }) {
                ...ItemPreview
            }
        }
    }
    ${CollectionBasicFragmentDoc}
    ${ItemPreviewFragmentDoc}
`

/**
 * __useGetCollectionQuery__
 *
 * To run a query within a React component, call `useGetCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionQuery({
 *   variables: {
 *      profileSlug: // value for 'profileSlug'
 *      sectionSlug: // value for 'sectionSlug'
 *      sectionIndex: // value for 'sectionIndex'
 *   },
 * });
 */
export function useGetCollectionQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetCollectionQuery,
        GetCollectionQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetCollectionQuery,
        GetCollectionQueryVariables
    >(GetCollectionDocument, baseOptions)
}
export function useGetCollectionLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetCollectionQuery,
        GetCollectionQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetCollectionQuery,
        GetCollectionQueryVariables
    >(GetCollectionDocument, baseOptions)
}
export type GetCollectionQueryHookResult = ReturnType<
    typeof useGetCollectionQuery
>
export type GetCollectionLazyQueryHookResult = ReturnType<
    typeof useGetCollectionLazyQuery
>
export type GetCollectionQueryResult = ApolloReactCommon.QueryResult<
    GetCollectionQuery,
    GetCollectionQueryVariables
>
export const GetProfileDocument = gql`
    query getProfile($slug: String) {
        user(where: { slug: $slug }) {
            ...UserBasic
            ...Social
        }
        sections(where: { owner: { slug: { equals: $slug } } }) {
            id
            slug
            name
            index
        }
    }
    ${UserBasicFragmentDoc}
    ${SocialFragmentDoc}
`

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProfileQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetProfileQuery,
        GetProfileQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<GetProfileQuery, GetProfileQueryVariables>(
        GetProfileDocument,
        baseOptions
    )
}
export function useGetProfileLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetProfileQuery,
        GetProfileQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetProfileQuery,
        GetProfileQueryVariables
    >(GetProfileDocument, baseOptions)
}
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>
export type GetProfileLazyQueryHookResult = ReturnType<
    typeof useGetProfileLazyQuery
>
export type GetProfileQueryResult = ApolloReactCommon.QueryResult<
    GetProfileQuery,
    GetProfileQueryVariables
>
export const GetUserBySlugDocument = gql`
    query getUserBySlug($slug: String!) {
        user(where: { slug: $slug }) {
            ...UserBasic
        }
    }
    ${UserBasicFragmentDoc}
`

/**
 * __useGetUserBySlugQuery__
 *
 * To run a query within a React component, call `useGetUserBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetUserBySlugQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetUserBySlugQuery,
        GetUserBySlugQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetUserBySlugQuery,
        GetUserBySlugQueryVariables
    >(GetUserBySlugDocument, baseOptions)
}
export function useGetUserBySlugLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetUserBySlugQuery,
        GetUserBySlugQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetUserBySlugQuery,
        GetUserBySlugQueryVariables
    >(GetUserBySlugDocument, baseOptions)
}
export type GetUserBySlugQueryHookResult = ReturnType<
    typeof useGetUserBySlugQuery
>
export type GetUserBySlugLazyQueryHookResult = ReturnType<
    typeof useGetUserBySlugLazyQuery
>
export type GetUserBySlugQueryResult = ApolloReactCommon.QueryResult<
    GetUserBySlugQuery,
    GetUserBySlugQueryVariables
>
export const GetUserByAuthIdDocument = gql`
    query getUserByAuthId($authId: String!) {
        user(where: { authUserId: $authId }) {
            ...UserBasic
        }
    }
    ${UserBasicFragmentDoc}
`

/**
 * __useGetUserByAuthIdQuery__
 *
 * To run a query within a React component, call `useGetUserByAuthIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByAuthIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByAuthIdQuery({
 *   variables: {
 *      authId: // value for 'authId'
 *   },
 * });
 */
export function useGetUserByAuthIdQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetUserByAuthIdQuery,
        GetUserByAuthIdQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetUserByAuthIdQuery,
        GetUserByAuthIdQueryVariables
    >(GetUserByAuthIdDocument, baseOptions)
}
export function useGetUserByAuthIdLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetUserByAuthIdQuery,
        GetUserByAuthIdQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetUserByAuthIdQuery,
        GetUserByAuthIdQueryVariables
    >(GetUserByAuthIdDocument, baseOptions)
}
export type GetUserByAuthIdQueryHookResult = ReturnType<
    typeof useGetUserByAuthIdQuery
>
export type GetUserByAuthIdLazyQueryHookResult = ReturnType<
    typeof useGetUserByAuthIdLazyQuery
>
export type GetUserByAuthIdQueryResult = ApolloReactCommon.QueryResult<
    GetUserByAuthIdQuery,
    GetUserByAuthIdQueryVariables
>
export const CreateUserDocument = gql`
    mutation CreateUser(
        $slug: String!
        $authUserId: String!
        $pictureUrl: String!
        $biography: String!
    ) {
        user: createOneUser(
            data: {
                slug: $slug
                authUserId: $authUserId
                pictureUrl: $pictureUrl
                firstname: $slug
                biography: $biography
                sections: {
                    create: [{ slug: "section", name: "My first section" }]
                }
            }
        ) {
            ...UserBasic
        }
    }
    ${UserBasicFragmentDoc}
`

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      authUserId: // value for 'authUserId'
 *      pictureUrl: // value for 'pictureUrl'
 *      biography: // value for 'biography'
 *   },
 * });
 */
export function useCreateUserMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateUserMutation,
        CreateUserMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        CreateUserMutation,
        CreateUserMutationVariables
    >(CreateUserDocument, baseOptions)
}
export type CreateUserMutationHookResult = ReturnType<
    typeof useCreateUserMutation
>
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<
    CreateUserMutation
>
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateUserMutation,
    CreateUserMutationVariables
>
