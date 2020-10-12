import * as firebase from 'firebase';

export type Observer<T> = {
    next?(arg: T): void;
    error?(error: firebase.firestore.FirestoreError): void;
    complete?(): void;
};

type Error = firebase.firestore.FirestoreError;

declare module 'mockbase/firestore/document-reference' {
    export interface MockDocumentReference<T = firebase.firestore.DocumentData> {
        onSnapshot(observer: Observer<firebase.firestore.DocumentSnapshot<T>>): () => void;
        onSnapshot(options: firebase.firestore.SnapshotListenOptions, observer: Observer<firebase.firestore.DocumentSnapshot<T>>): () => void;
        onSnapshot(onNext: (snapshot: firebase.firestore.DocumentSnapshot<T>) => void, onError?: ((error: Error) => void) | undefined, onCompletion?: (() => void) | undefined): () => void;
        onSnapshot(options: firebase.firestore.SnapshotListenOptions, onNext: (snapshot: firebase.firestore.DocumentSnapshot<T>) => void, onError?: ((error: Error) => void) | undefined, onCompletion?: (() => void) | undefined): () => void;

    }
}

declare module 'mockbase/firestore/query' {
    export interface MockQuery<T = firebase.firestore.DocumentData> {
        onSnapshot(observer: Observer<firebase.firestore.QuerySnapshot<T>>): () => void;
        onSnapshot(options: firebase.firestore.SnapshotListenOptions, observer: Observer<firebase.firestore.QuerySnapshot<T>>): () => void;
        onSnapshot(onNext: (snapshot: firebase.firestore.QuerySnapshot<T>) => void, onError?: ((error: Error) => void) | undefined, onCompletion?: (() => void) | undefined): () => void;
        onSnapshot(options: firebase.firestore.SnapshotListenOptions, onNext: (snapshot: firebase.firestore.QuerySnapshot<T>) => void, onError?: ((error: Error) => void) | undefined, onCompletion?: (() => void) | undefined): () => void;
    }
}

declare module 'mockbase/firestore/collection-group' {
    export interface MockCollectionGroup<T = firebase.firestore.DocumentData> {
        onSnapshot(observer: Observer<firebase.firestore.QuerySnapshot<T>>): () => void;
        onSnapshot(options: firebase.firestore.SnapshotListenOptions, observer: Observer<firebase.firestore.QuerySnapshot<T>>): () => void;
        onSnapshot(onNext: (snapshot: firebase.firestore.QuerySnapshot<T>) => void, onError?: ((error: Error) => void) | undefined, onCompletion?: (() => void) | undefined): () => void;
        onSnapshot(options: firebase.firestore.SnapshotListenOptions, onNext: (snapshot: firebase.firestore.QuerySnapshot<T>) => void, onError?: ((error: Error) => void) | undefined, onCompletion?: (() => void) | undefined): () => void;
    }
}