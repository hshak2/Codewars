function createSecretHolder(secret) {
	return {
		getSecret() {
			return secret
		},

		setSecret(key) {
			secret = key
		}
	}
}
