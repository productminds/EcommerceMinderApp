type Ref<T extends {id: string}> = Pick<T, 'id'>;

export default Ref;
