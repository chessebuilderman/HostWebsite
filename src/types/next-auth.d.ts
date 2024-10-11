/* eslint-disable @typescript-eslint/no-empty-object-type */
import { DefaultSession } from 'next-auth';
declare module 'next-auth' {
  export type OAuthConfig<Profile> = OIDCConfig<Profile> | OAuth2Config<Profile>

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends DefaultUser {
    authType?: 'roblox' | 'discord';
    displayName?: string;
    nickname?: string;
    image?: string
    userId: string;
    id: string;
  }
  /**
   * The shape of the account object returned in the OAuth providers' `account` callback,
   * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
   */
  interface Account extends DefaultAccount {

  }

  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session extends DefaultSession {
    user: User
    authType?: 'roblox' | 'discord';
  }
}
