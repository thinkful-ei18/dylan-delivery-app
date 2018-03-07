export const required = value => value ? undefined : 'Required';
export const trackingLength = value => value.length === 5 && /\d{5}/.test(value) ? undefined : 'Tracking number must be 5 numbers';
export const complaint = value => value ? undefined : 'Please select a reason';