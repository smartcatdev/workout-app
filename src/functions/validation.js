/**
 *
 * Validates a first or a last name
 *
 * @param String name
 * @returns {boolean}
 */
export function name(name) {
    return name.length > 1 ? true : false
}


/**
 *
 * Validates an email address
 *
 * @param email
 * @returns {boolean}
 */
export function email(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 *
 * Validates Password length
 *
 * @param password
 * @returns {boolean}
 */
export function password(password) {
    return password.length > 7 ? true : false
}

/**
 *
 * Validates that input is not empty
 * @param field
 * @returns {boolean}
 */
export function notEmpty(field) {
    return field.length > 0 ? true : false
}


