// This file was auto-generated by action-io-generator. Do not edit by hand!
export enum Inputs {
    /**
     * After copying the image, write the digest of the resulting image to the file.
     * By default, the filename will be determined from the image and tag.
     * The contents of this file are the digest output.
     * Required: false
     * Default: None.
     */
    DIGESTFILE = "digestfile",
    /**
     * Extra args to be passed to podman push.
     * Separate arguments by newline. Do not use quotes - @actions/exec will do the quoting for you.
     * Required: false
     * Default: None.
     */
    EXTRA_ARGS = "extra-args",
    /**
     * Name of the image to push
     * Required: true
     * Default: None.
     */
    IMAGE = "image",
    /**
     * Password to use as credential to authenticate to the registry
     * Required: true
     * Default: None.
     */
    PASSWORD = "password",
    /**
     * Registry where to push the image (eg. quay.io/username)
     * Required: true
     * Default: None.
     */
    REGISTRY = "registry",
    /**
     * The tag or tags of the image to push. For multiple tags, seperate by a space. For example, "latest v1"
     * Required: false
     * Default: "latest"
     */
    TAGS = "tags",
    /**
     * Verify TLS certificates when contacting the registry
     * Required: false
     * Default: "true"
     */
    TLS_VERIFY = "tls-verify",
    /**
     * Username to use as credential to authenticate to the registry
     * Required: true
     * Default: None.
     */
    USERNAME = "username",
}

export enum Outputs {
    /**
     * The pushed image digest, as written to the "digestfile"
     * Required: false
     * Default: None.
     */
    DIGEST = "digest",
    /**
     * The first element of registry-paths.
     * Required: false
     * Default: None.
     */
    REGISTRY_PATH = "registry-path",
    /**
     * A JSON array of registry paths to which the tag(s) were pushed
     * Required: false
     * Default: None.
     */
    REGISTRY_PATHS = "registry-paths",
}
