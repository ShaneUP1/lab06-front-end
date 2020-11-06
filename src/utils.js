import fetch from 'superagent';

export async function fetchFourteeners() {
    try {
        const response = await fetch.get('https://stark-escarpment-62671.herokuapp.com/fourteeners');

        return response.body;
    } catch (err) {
        throw err;
    }
}


export async function fetchMtnRanges() {
    try {
        const response = await fetch.get('https://stark-escarpment-62671.herokuapp.com/mtn_ranges');

        return response.body;
    } catch (err) {
        throw err;
    }
}


export async function fetchOneFourteener(someId) {
    try {
        const response = await fetch.get(`https://stark-escarpment-62671.herokuapp.com/fourteeners/${someId}`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function createFourteener(newFourteener) {
    try {
        await fetch
            .post('https://stark-escarpment-62671.herokuapp.com/fourteeners')
            .send(newFourteener);

        return;
    } catch (err) {
        throw err;
    }
}

export async function updateFourteener(someId, newFourteener) {
    try {
        await fetch
            .put(`https://stark-escarpment-62671.herokuapp.com/fourteeners/${someId}`)
            .send(newFourteener);

        return;
    } catch (err) {
        throw err;
    }
}

export async function deleteFourteener(someId) {
    try {
        await fetch.delete(`https://stark-escarpment-62671.herokuapp.com/fourteeners/${someId}`);

        return;
    } catch (err) {
        throw err;
    }
}

