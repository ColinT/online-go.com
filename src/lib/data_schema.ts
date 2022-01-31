/*
 * Copyright (C) 2012-2022  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This is the schema for the data functions (e.g. get(), set()).  It defines
 * all the possible keys as well as the associated value types.
 */

import { GroupList, ActiveTournamentList } from "./types";
import { Announcement } from "src/components/Announcements";

export interface DataSchema {
    user: any;
    bid: string;
    theme: string;
    debug: boolean;

    // TODO: make a types for each of these that list the keys explicitly
    cached: any;
    [cached_key: `cached.${string}`]: any;
    config: any;
    [config_key: `config.${string}`]: any;
    [chat_key: `chat.${string}`]: any;
    [sound_key: `sound.${string}`]: any;
    [preferences_key: `preferences.${string}`]: any;
    [custom_key: `custom.${string}`]: any;
    [chat_manager_key: `chat-manager.${string}`]: any;
    [chat_indicator_key: `chat-indicator.${string}`]: any;
    [time_control_key: `time_control.${string}`]: any;
    [pm_key: `pm.${string}`]: any;
    [player_notes_key: `player-notes.${string}`]: any;
    [learning_hub_key: `learning-hub.${string}`]: any;
    [moderator_key: `moderator.${string}`]: any;
    [automatch_key: `automatch.${string}`]: any;
    [puzzle_key: `puzzle.${string}`]: any;
    [device_key: `device${string}`]: any;
    [settings_key: `settings.${string}`]: any;
    [paginated_table_key: `paginated-table.${string}`]: any;
    [observed_games_key: `observed-games.${string}`]: any;
    [announcements_key: `announcements.${string}`]: any; // probably should figure out why these are different
    [announcement_key: `announcement.${string}`]: any;
    [challenge_key: `challenge.${string}`]: any;
    [dismissed_key: `dismissed.${string}`]: any;
    [demo: `demo.${string}`]: any;

    "last-visited-since-goals-shown": string;
    "hours-visited-since-goals-shown": number;
    "table-color-default-on": boolean;
    "joseki-url": string;
    "ad-override": boolean;
    "email-banner-dismissed": boolean;
    "cached.groups": GroupList;
    "cached.active_tournaments": ActiveTournamentList;
    "active-tournament": Announcement;
}
